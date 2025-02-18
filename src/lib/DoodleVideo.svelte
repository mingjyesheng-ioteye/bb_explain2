<!-- The delete button is added here -->
<div style="position: absolute; left: 0; right: auto; top: 0; bottom: auto; display: flex; padding-top: 8px; padding-bottom: 4px; z-index: 5">
  <Button on:click={togglePlaySpeed} variant="raised" style="margin-left: 8px; padding-left: 8px; padding-right: 8px; background-color: rgba(255,255,255,0.5); color: white;">
    <div style="color: white">
      {playbackSpeed}x speed
    </div>
    <span class="material-icons"></span>
  </Button>
  <slot>

  </slot>
</div>

<!-- The play button double-duties as an indication that the video has finished fetching -->
{#if !recursiveSyncer && isPlaying === false && strokesArray}
  <span on:click={startAudioPlayer} class="material-icons overlay-center" style="color: white; font-size: 6rem; width: 120px; height: 120px; z-index: 5">
    play_circle
  </span>
{/if}

<!-- 
  For reasons I don't understand, I need `position: absolute` 
  otherwise pencil strokes are submerged by back canvas 
-->
<div style="position: relative">
  <canvas 
    bind:this={canvas} 
    on:click={togglePlayPause}
    style={`
      position: absolute; 
      z-index: 1; 
      margin-top: 0; 
      margin-left: 0; 
      width: ${$canvasWidth}px; 
      height: ${$canvasHeight}px; 
      background-color: transparent`
    }
  >
  </canvas>

  <canvas 
    bind:this={bgCanvas} 
    style={`
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      display: block;
      width: ${$canvasWidth}px; 
      height: ${$canvasHeight}px;
      background-color: rgb(46, 49, 49);`
    }
  >
  </canvas>
</div>

<div>
  <audio 
    on:play={initSyncing} 
    on:seeking={syncStrokesToAudio}
    bind:this={AudioPlayer} 
    src={audioDownloadURL} 
    controls 
    style={`width: ${$canvasWidth}px; height: 40px; position: absolute; bottom: 0; top: auto;`}>
  </audio>
</div>

<script>
  import { connectTwoPoints, drawStroke, renderBackground } from '../helpers/canvas.js'
  import { onMount, onDestroy, createEventDispatcher } from 'svelte'
  import { canvasWidth, canvasHeight } from '../store.js'
  import Button, { Label } from '@smui/button'
  // import IconButton from '@smui/icon-button';

  /**
   * Assumes `strokesArray` gets hydrated EXACTLY once
   */

  export let strokesArray
  export let audioDownloadURL
  export let backgroundImageDownloadURL

  let hasPlayedOnce = false
  let isPlaying = false

  let allFrames
  let nextFrameIdx
  let canvas
  let bgCanvas
  let ctx
  let bgCtx
  let AudioPlayer
  let recursiveSyncer
  let playbackSpeed = 2

  const dispatch = createEventDispatcher()

  // handle resizing
  $: if (ctx) {
    canvas.width = $canvasWidth
    canvas.height = $canvasHeight
    bgCanvas.width = $canvasWidth
    bgCanvas.height = $canvasHeight
    
    if (strokesArray) {
      // TODO: rename to `re-render strokes`
      handleResize() // sometimes resize happens when `strokesArray` is not yet hydrated
    } 
  }

  onMount(() => {
    ctx = canvas.getContext('2d')
    bgCtx = bgCanvas.getContext('2d')

    AudioPlayer.playbackRate = playbackSpeed // for some reason changing `AudioPlayer.defaultPlaybackRate` doesn't do anything
    AudioPlayer.onended = (e) => isPlaying = false 
    AudioPlayer.onpause = (e) => isPlaying = false
  })

  $: if (ctx && strokesArray && !allFrames) {
    initDoodleVideo()
  }

  $: if (bgCtx) {
    bgCtx.clearRect(0, 0, bgCanvas.scrollWidth, bgCanvas.scrollHeight)
    renderBackground(backgroundImageDownloadURL, canvas, bgCtx)
  }

  $: if (AudioPlayer) {
    playbackSpeed = AudioPlayer.playbackRate
    // I know...AudioPlayer is not reactive because of bind:this, will refactor in future
  }

  onDestroy(() => {
    if (recursiveSyncer) clearTimeout(recursiveSyncer)
  })

  function togglePlaySpeed () {
    if (AudioPlayer.playbackRate === 2) {
      AudioPlayer.playbackRate = 1 
    } else {
      AudioPlayer.playbackRate = 2
    }
  }

  function togglePlayPause () {
    if (!recursiveSyncer && isPlaying === false && strokesArray) {
      startAudioPlayer()
    } 
    else {
      if (isPlaying) AudioPlayer.pause()
      else AudioPlayer.play()  
    }
  }
  
  function initDoodleVideo () {
    for (const stroke of strokesArray) {
      drawStroke(stroke, null, ctx, canvas)
    }

    /**
     * `allFrames` is computed only once, and stores INDICES, 
     * so it relies on `strokesArray` staying the IMMUTABLE,
     * otherwise strange errors happen when accesssing `strokesArray[index]`
     */
    const allPoints = [];
    for (let i = 0; i < strokesArray.length; i++) {
      // `pointIndex` cannot be 0, as `prevPoint` deducts 1 from it
      for (let j = 1; j < strokesArray[i].points.length; j++) {
        const frame = { strokeIndex: i, pointIndex: j };
        allPoints.push({ 
          startTime: getStartTime(frame),
          ...frame, 
        }); 
      }
    }
    // sorting is necessary because while you're drawing, others might draw in the middle of your stroke
    // maybe disallow that behavior in the future?
    allFrames = allPoints.sort((p1, p2) => p1.startTime - p2.startTime);
  }

  function startAudioPlayer () {
    AudioPlayer.play()
  }

  function getStartTime ({ strokeIndex, pointIndex }) {
    const stroke = strokesArray[strokeIndex];
    return stroke.startTime + (pointIndex - 1) * getPointDuration(stroke);
  }

  function getPointDuration (stroke) {
    const strokePeriod = (stroke.endTime - stroke.startTime);
    return strokePeriod / stroke.points.length;
  }

  // NOTE: initSyncing() is called EVERY time you press play (e.g. after a pause) - the video playback works as expected but not for the reasons you think
  function initSyncing () {
    isPlaying = true

    // visual logic
    nextFrameIdx = 0;
    ctx.clearRect(0, 0, $canvasWidth, $canvasHeight) // video could already be rendered as an initial preview or completed video
    syncRecursively()

    // after 6 seconds, if the video is still playing:
    //   we tell parent to increment `viewMinutes` by 0.1,
    //   we do another 6 seconds timeout (via recursion)
    // BASE CASE: nothing will be updated nor called after the countdown if the video is no longer playing
    const sixSeconds = 6000
    function updateViewMinutes () {
      setTimeout(
        () => {
          if (isPlaying) {
            dispatch('six-seconds-elapsed', { playbackSpeed })
            updateViewMinutes()
          }
        },
        sixSeconds
      )
    } 
    updateViewMinutes()
  }
  
  function syncRecursively () {
    if (!AudioPlayer) return
    syncStrokesToAudio()
    if (nextFrameIdx < allFrames.length) {
      // calculate sleep duration
      const nextFrame = allFrames[nextFrameIdx]
      const timeTilNextStroke = 1000 * (nextFrame.startTime - AudioPlayer.currentTime)
      recursiveSyncer = setTimeout(syncRecursively, timeTilNextStroke/playbackSpeed) // use recursion instead of `setInterval` to prevent overlapping calls
    }
  }

  function syncStrokesToAudio () {
    if (!AudioPlayer) return
    const nextFrame = allFrames[nextFrameIdx];
    if (!nextFrame || nextFrame.startTime > AudioPlayer.currentTime) { // !nextFrame: nextFrame is undefined after a video finishes
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      nextFrameIdx = 0
    }
    renderFramesUntilCurrentTime()
  }

  function renderFramesUntilCurrentTime () {
    const { currentTime } = AudioPlayer
    for (let i = nextFrameIdx; i < allFrames.length; i++) {
      const frame = allFrames[i]
      if (frame.startTime > currentTime) { 
        break
      }
      renderFrame(frame)
      nextFrameIdx += 1
    }
  }

  function renderFrame ({ strokeIndex, pointIndex }) {
    const stroke = strokesArray[strokeIndex]

    let normalizedLineWidth 
    if (stroke.canvasWidth) {
      normalizedLineWidth = stroke.lineWidth * ($canvasWidth / stroke.canvasWidth) 
    } else { 
      // backwards compatibility: we didn't use to remember what the canvas width on the original device was, so can't normalize it
      normalizedLineWidth = stroke.lineWidth
    }
    connectTwoPoints(
      stroke.points, 
      pointIndex, 
      stroke.isErasing, 
      ctx,
      stroke.color,
      normalizedLineWidth,
      canvas
    )
  }

  function handleResize () {
    return new Promise(async (resolve) => {
      if (recursiveSyncer) {
        // video was playing: resume to previous progress
        nextFrameIdx = 0
        syncStrokesToAudio()
      } else if (hasPlayedOnce) {
        renderFramesUntilCurrentTime()
      } else {
        for (const stroke of strokesArray) {
          drawStroke(stroke, null, ctx, canvas)
        }
      }
      resolve();
    })
  }
</script>

<style>
.overlay-center {
  position: absolute; width: 20px; height: 20px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto; 
  color: white
}
</style>
{#if Object.keys($user).length === 0}
	<!-- <section style="background: #FDFDF8; height: 100%; padding-top: 100px; padding-bottom: 100px; border-bottom: 1px solid #eee;">
		<div class="content" style="width: {$canvasWidth}px">
			<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
				It's hard to learn properly without visuals
			</h1>

			<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
				Learning communities built around Discord, Piazza, Facebook etc. have a fundamental flaw: they are text-based platforms. We have to over-use words because it's hard to make pictures or just draw on a board.
				<br>
				<br>     
        Times are changing: stylus-enabled tablets are becoming more affordable, web apps have evolved.
			</p>
			<br>
		</div>
	</section>

	<section style="height: {$canvasHeight + 260}px; padding-top: 100px; padding-bottom: 100px; border-bottom: 1px solid #eee;">
		<div class="content" style="width: {$canvasWidth}px">
			<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">Blackboard-centric servers</h1>
			<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
				Explain = Discord (voice chat) + KhanAcademy (blackboards). Here, blackboard videos upload near-instantly, so explanations are <b>easily re-usable.</b>
				<br>
				<br>
				Here's an example video that was recorded on this website: 
			</p>
		</div>

		<div style={`position: relative; width: ${$canvasWidth}px; height: ${$canvasHeight + 60}px; margin: auto;`} id="caleb-video-section">
			<RenderlessListenToBoard dbPath="/classes/AsUl1VWQ7zzxZsD5epL7/blackboards/AsUl1VWQ7zzxZsD5epL7"
				let:boardDoc={boardDoc}
			>
				<RenderlessFetchStrokes dbPath="/classes/AsUl1VWQ7zzxZsD5epL7/blackboards/AsUl1VWQ7zzxZsD5epL7" autoFetchStrokes={true}
					let:strokesArray={strokesArray}
				>
					{#if boardDoc}
						<DoodleVideo 
							{strokesArray} 
							audioDownloadURL={boardDoc.audioDownloadURL} 
							backgroundImageDownloadURL={boardDoc.backgroundImageDownloadURL}
						/>
					{/if}
				</RenderlessFetchStrokes>
			</RenderlessListenToBoard>
		</div>
	</section> -->

	<section style="height: 100%; padding-top: 150px; padding-bottom: 150px; border-bottom: 1px solid #eee; background: #FDFDF8;">
		<div class="content" style="width: {$canvasWidth}px">
			<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
        Get started
			</h1>

			<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
        Phone accounts are password-less and lets Explain notify you (if the settings are on)
			</p>
		</div>

		<PhoneLogin canTakeInternationalNumbers/>
	</section>
{/if}

<!-- <h1>
This website makes it <b style="color: rgb(15 186 191)">efficient to give & receive explanations</b>, so everyone can get enough help
</h1>

<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
  Help can become an abundant resource if it is easy to re-use explanations.
  If tutors don't need to repeat themselves, they can have more time and/or help more students. 
</p> -->

<!-- Sign-up -->
<!-- <section style="height: 250px; padding: 150px 100px; border-bottom: 1px solid #eee">
	<div class="content">
		<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
			Get started
		</h1>

		<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
			<li>Create a phone account to join the 8.01 server</li>
			<li>For anything related to the website, contact eltonlin@mit.edu / 503 250 3868</li>
		</p>
		

			<div id="sign-up-section" style="height: 100px">
				{#if !phoneConfirmationResult}
					<div style="display: flex; justify-content: center; align-items: center; margin-top: 24px; margin-right: 6px; margin-left: auto;">
						<div style="margin-right: 10px; font-family: Roboto, sans-serif; font-size: 2rem">+1 </div>
						<input type="tel" id="phone-input-1" minlength="3" maxlength="3" placeholder="339" bind:value={phoneNumSegment1} style="width: 54px; height: 40px; font-size: 2rem; margin-right: 10px">

						<input type="tel" id="phone-input-2" minlength="3" maxlength="3" placeholder="676" bind:value={phoneNumSegment2} style="width: 54px; height: 40px; font-size: 2rem; margin-right: 10px">

						<input type="tel" id="phone-input-3" minlength="4" maxlength="4" placeholder="1234" bind:value={phoneNumSegment3} style="width: 76px; height: 40px; font-size: 2rem; margin-right: 10px">
						<Button id="sign-in-button" on:click={signInWithPhone} style="color: rgb(80 185 165)">
							Sign Up
						</Button>
					</div>
				{:else}
					<div style="display: flex">
						<Textfield variant="filled" bind:value={phoneConfirmCode} label="6-digit code">
							<HelperText slot="helper"></HelperText>
						</Textfield>
						<Button on:click={verifyConfirmationCode}>Confirm code</Button>
					</div>
				{/if}
			</div>
		<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
		
			<br>
			<br>

		</p>
	</div>
</section> -->

<!-- FAQ -->
<!-- <section style="background: #FDFDF8; height: 100%; padding: 150px 100px; border-bottom: 1px solid #eee">
	<div class="content">
		<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
			Frequently Asked Questions
		</h1>
		<br>
		<br>
		<h2 style="color: #33333d; margin-top: 0; font: 20px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
			<b>Q: Why not work with in-class TAs?</b>
		</h2>
		<p style="font-size: 1.26rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
			
				<b>A: Stronger teaching incentives:</b>
					Teaching more is not financially rewarded because salaries are constant. Moreover, staff members are severely time-limited: research, staff management, etc. so it's costly to try new things.
					<br><br>
				  Outside tutors (EECS grad. students) - on the other hand - have fewer commitments, and are allowed to be rewarded proportional to their impact. This means skin-in-the-game to provide as great an experience as possible.
		</p>

		<br>
		<br>

		<p style="font-size: 1.26rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
			<b>For other questions, ping the organizer eltonlin@mit.edu or 503 250 3868 anytime.</b>
		</p>
	</div>
</section> -->

<script>	
	import { onMount, tick, onDestroy } from 'svelte'
	import { goto } from '$app/navigation'
	import { canvasHeight, canvasWidth, user, recordState } from '../../store.js'
	import Button, { Label } from '@smui/button';
	import HelperText from '@smui/textfield/helper-text'
	import Textfield from '@smui/textfield';
	import Blackboard from '$lib/Blackboard.svelte'
	import DoodleVideo from '$lib/DoodleVideo.svelte'
	import RenderlessAudioRecorder from '$lib/RenderlessAudioRecorder.svelte'
	import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
	import { calculateCanvasDimensions2 } from '../../helpers/canvas.js'
	import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
	import PhoneLogin from '$lib/PhoneLogin.svelte'
	
	let currentTime = 10
	let titleValue = 'Welcome!'
	let i = 0
	let typewriter

	const print = console.log
	let hasClickedTitle = false
	$: isQuestionMode = '?' === titleValue.charAt(titleValue.length - 1)
	let hasWatchedExemplar = false
	let hasRecordedVideo = false
	let localStrokesArray = []
	let audioBlobURL = ''
	let hasWatchedVideo = false
	let timer
	let demoStrokesArray = []

	function startTypingAnimation () {
		titleValue = ''
		const values = [
			'Gradient descent',
			'Finals 2019',
			'RNN example',
			"Explain 2b visually",
		]
		typewriter = setInterval(() => {
			titleValue = values[i]
			i += 1
			if (i === values.length) {
				clearInterval(typewriter)
			}
		}, 300)
	}

	$:if (isQuestionMode) {
		setTimeout(() => {
			hasWatchedExemplar = true
		}, 5000)
	}

	$: if (currentTime.toFixed(0) === '0') {
		clearInterval(timer)
	}

	$: if (hasWatchedVideo) {
		tick().then(() => {
			const elem = document.getElementById('sign-up-section')
			elem.scrollIntoView({ 
				block: "center", // vertical alignment
				inline: "nearest", // horizontal alignment
				// behavior: "smooth"
			})
		})
	}

	function adjustContentDimensions () {
		const { width, height } = calculateCanvasDimensions2()
		canvasWidth.set(width) 
		canvasHeight.set(height)
	}

	onMount(() => {
		window.addEventListener('resize', adjustContentDimensions)
		adjustContentDimensions()
	})

	onDestroy(() => {
		window.removeEventListener('resize', adjustContentDimensions)
	})

	async function startRealtimeDemo (element, strokesArray) {
		for (const stroke of strokesArray) {
			demoStrokesArray = [...demoStrokesArray, stroke]
			await new Promise(resolve => setTimeout(resolve, 200));
		}
	}

	function saveVideoLocally (audioBlob) {
		audioBlobURL = URL.createObjectURL(audioBlob)
		hasRecordedVideo = true
		setTimeout(() => hasWatchedVideo = true, 5000)
		// quick-fix, otherwise when user logs in to a real server their blackboard is *shown* to be uploading for some reason
		recordState.set('pre_record')
	}

	function startRecordCountdown (element) {
		timer = setInterval(() => currentTime -= 1, 1000)	
	}
</script>

<style>
:global(.room-title input) {
  font-size: 2rem;
}

:global(.question input) {
  color: rgb(19, 145, 230) !important
}

.copied-from-koa {
	font: 20px/1.7 "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif
}
/* increased 17px to 18px */

#logo {
    font: 150px 'Italiana', sans-serif;
    text-transform: lowercase;
}

.content {
	margin: 0 auto;
	/* min-width: 750px;
	max-width: 750px; */
	text-align: left;
}

li {
	margin-bottom: 2px;
}

#make-your-own-video {

}

</style>

<!-- 	<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture> -->
<!-- 
<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style> -->

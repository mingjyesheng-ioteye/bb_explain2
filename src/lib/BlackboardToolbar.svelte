<div 
  style="
  position: absolute; 
  display: flex; 
  align-items: center; 
  height: 50px; 
  left: 0; 
  right: auto; 
  top: 0; 
  bottom: auto; 
  z-index: 2; 
  background-color: grey; 
  padding-left: 10px; 
  border-radius: 2px;"
>
  <div on:click|stopPropagation|preventDefault={func}
    style="margin-right: 10px; text-align: center"
  >
    <!-- 
      Don't put click listeners on Switch, 
      some weird behavior happens that causes it to NOT flick
      on the first click,
      (and no, I don't use bind:checked={variable},
       so should only determine its initial value)
    -->
    <Switch 
      icons={false}
      checked={!$onlyAllowApplePencil}
      style="margin: 0 !important"
    />
    <div style="margin-top: 1px; margin-left: 1px; font-size: 0.52rem; font-family: Roboto,sans-serif; color: white;">
      {$onlyAllowApplePencil ? 'No touch' : 'Touch draw'}
    </div>
  </div>
  {#if Object.keys($user).length > 0}
    {#each $user.pencilColors as color }
      <div on:click={() => currentTool.set({ type: 'pencil', color, lineWidth: 3 })} style="margin: 0 4px; width: 30px; height: 42px; border-radius: 3px; align-items: center; display: flex; justify-content: center;" 
        class:pencil-selected={$currentTool.color === color && $currentTool.color !== currentDiceColor}
      >
        <svg preserveAspectRatio="none" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="16px" height="30px" viewBox="0 0 100 230" style="enable-background:new 0 0 100 230;" xml:space="preserve"
        >
          <g>
            <path d="M0,0v72.377c0,1.588,0.234,3.169,0.698,4.706l45.416,150.032C46.633,228.828,48.212,230,50,230s3.367-1.172,3.886-2.883
              L99.31,77.079c0.457-1.525,0.69-3.108,0.69-4.702V0.002"/>;
            <polygon 
              style={`fill: ${color};`}
              points="50,211.978 38.879,175.24 61.122,175.24"
            />
            <path 
              style="fill:#424242;" 
              d="M63.581,167.118H36.42L8.765,75.761l10.924-9.63l12.5,11.015c1.54,1.353,3.835,1.35,5.375-0.002
                l12.468-11.007l12.464,11.005c1.54,1.357,3.839,1.357,5.377,0l12.465-11.005l10.9,9.623L63.581,167.118z"
            />
            <path 
              style={`fill: ${color};`} 
              d="M91.878,0v65.486l-8.852-7.813c-1.539-1.353-3.838-1.354-5.377,0.002L65.185,68.679L52.72,57.674
                c-1.539-1.356-3.838-1.354-5.377-0.002L34.871,68.683L22.375,57.67c-0.769-0.676-1.725-1.013-2.685-1.013
                c-0.959,0-1.919,0.339-2.685,1.013L8.121,65.5L8.098,0.024L91.878,0z"
            />
          </g>
        </svg> 
      </div>
    {/each}

    <img on:click={handleDiceClick}
      src="https://i.imgur.com/qshS7Vi.png"
      width="30"
      height="30"
      style="margin-left: 8px"
      alt="Random color dice"
    />

    <img 
      on:click={() => currentTool.set({ type: 'eraser', color: '', lineWidth: 32 })}
      class:eraser-selected={$currentTool.type === 'eraser'}
      width="46" height="40"
      style="margin-left: 15px; margin-right: 8px;"
      src="https://i.imgur.com/Klln1yP.png"
      alt="eraser"
    >
  {/if}
  
  <slot>

  </slot>

  <slot name="dropdown-menu">

  </slot>  
</div>

<script>
  import { user, currentTool, onlyAllowApplePencil } from '../store.js'
  import Switch from '@smui/switch';

  let currentDiceColor = ''

  function func () {
    onlyAllowApplePencil.set(!$onlyAllowApplePencil)
  }

  function handleDiceClick (color, i) {
    // don't change color when there is already an existing color saved
    if (!currentDiceColor || $currentTool.color === currentDiceColor) {
      currentDiceColor = getRandomColor()
    }
    currentTool.set({ type: 'pencil', color: currentDiceColor, lineWidth: 3 })
  }
    
  //   const { currentTool } = this
  //   const alreadySelected = currentTool.color === color && currentTool.type === 'PEN'
  //   if (!alreadySelected) {
  //     const penWidthsCopy = [ ...(this.user.penWidths || [2, 2, 2, 2]) ]
  //     this.$store.commit("SET_CURRENT_TOOL", {
  //       type: "PEN",
  //       color: color,
  //       lineWidth: penWidthsCopy[i]
  //     })
  //   } else {
  //     this.diceNumber = 1 + Math.floor( Math.random() * 6 )
  //     const newPencilWidth = this.diceNumber

  //     this.changePenColor(this.getRandomColor(), i, newPencilWidth)
  //   }
  // }
  function getRandomColor () {
      return "hsla(" + ~~(360 * Math.random()) + "," + // hue i.e. the "color"
                    "100%,"+  // 100% saturation i.e. maximize on its vividness and purity
                    "60%,1)"; // 60% lightness (how much black / white mix, otherwise too faded), 1 alpha
  }

  // function changePenColor (color, i, width = 2) {
  //   const penColorsCopy = [...this.user.penColors];
  //   penColorsCopy[i] = color
  //   const penWidthsCopy = [ ...(this.user.penWidths || [2, 2, 2, 2]) ]
  //   penWidthsCopy[i] = width
  //   db.collection("users").doc(this.user.uid).update({
  //     penColors: penColorsCopy,
  //     penWidths: penWidthsCopy
  //   });
  //   this.$store.commit("SET_CURRENT_TOOL", {
  //     type: "PEN",
  //     color: penColorsCopy[i],
  //     lineWidth: penWidthsCopy[i]
  //   })
  //   this.newWidthToUpdate = null
  //   this.newColorToUpdate = null
  // }
</script>

<style>
svg {
  max-height: 30px;
}

.pencil-selected {
  background-color: white;
}

.eraser-selected {
  filter: invert(1)
}
</style>
<script lang="ts">
  import debounce from 'lodash-es/debounce';
  let consoleOpened = false;
  let dialog: any;

  $: consoleOpened? dialog.showModal(): dialog?.close()

  const handleKeydown = debounce((event: KeyboardEvent) =>{

    const metaKeyPressed = event.metaKey || event.ctrlKey
    if(!metaKeyPressed) return;

    const {key} = event;

    if(key==='k'){
      consoleOpened = !consoleOpened
    }
}, 250)

  const closeModal = () =>{
    consoleOpened = false;
  }

</script>

<style lang="scss">

  dialog {
    position: absolute;
    margin: auto;
    width: 100ch;
    height: 80ch;
    border: none;
    border-radius: 10px;
    background: hsl(250, 18%, 13%);
    color: white;
    pointer-events: inherit;
    opacity: 0.9;
    overflow: hidden;

    &::backdrop{
      opacity: 0.8;
      background-image: linear-gradient(to right top, #1185a2, #3a5e7f, #3c3a51, #281e27, #000000);
      filter: invert(20%);
    }
  }
</style>

<svelte:window on:keydown={handleKeydown}/>
<dialog bind:this={dialog}>
  <slot {closeModal} />
</dialog>
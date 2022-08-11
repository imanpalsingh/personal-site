<script lang="ts">
  import { afterUpdate } from 'svelte';
  import Modal from '../../common/modal.svelte';
  import Input from './input.svelte';

  let history:Array<any> = [];

  let query: string = "";
  let bodyRef: Element;
  const terminalText = "Terminal v0.0.1"
  let inputRef: any;

  afterUpdate(()=>{
    if(history.length){
      bodyRef.scrollTo({top: bodyRef.scrollHeight,  behavior: 'smooth'})
    }

  })

  const transferFocus = (e: Event)=>{
    e.stopPropagation();
    if(e.target === e.currentTarget){
      inputRef.focus();
    }
  }

</script>
<style lang="scss">
  section{
    font-family: monospace;
  }
  .header{
    width: 100%;
    height: 2rem;
    background: var(--clr-terminal-header);
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;

    span{

      &.close{
        position: absolute;
        right: 0.8rem;
        font-size: 1.5rem;
        cursor: pointer;
      }

      &.title{
        font-size: small;
      }
    }
  }

  .body{
    padding: 1rem 1rem 3rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    max-height: 100%;
    overflow: auto;
  }

  .svelte{
    color: var(--clr-terminal-magenta);
  }

  .help{
    color: var(--clr-terminal-brown);
  }

</style>

<section >
  <Modal let:closeModal onClick={transferFocus}>
    <div class="header">
      <span class="title">{terminalText}</span>
      <span class="close" on:click={closeModal}>&#x2715</span>
    </div>
    <div class="body" bind:this={bodyRef} >
      <div class="information">
        {`${terminalText} created with`}
        <span class="svelte">svelte</span>.
        {`Type `}
        <span class="help">help</span>
        {`for list of available commands`}
      </div>
      {#each history as Cmd}
        <Cmd.component name={Cmd.name}  />
      {/each}
      <Input bind:ref={inputRef} bind:history bind:query exitHandler={closeModal} />
    </div>
  </Modal>
</section>

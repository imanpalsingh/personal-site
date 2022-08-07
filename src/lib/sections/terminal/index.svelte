<script lang="ts">
  import { afterUpdate } from 'svelte';
  import Modal from '../../common/modal.svelte';
  import Input from './input.svelte';
  let history: any[] = []
  let query: string = "";
  let bodyRef: Element;


  afterUpdate(()=>{
    !!history.length &&  bodyRef.scrollTo({top: bodyRef.scrollHeight,  behavior: 'smooth'})
  })

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

</style>

<section>
  <Modal let:closeModal>
    <div class="header">
      <span class="title">Terminal v0.0.1</span>
      <span class="close" on:click={closeModal}>&#x2715</span>
    </div>
    <div class="body" bind:this={bodyRef}>
      <div class="information">
        Welcome to the terminal! Type help for the list of commands, or anything really.
      </div>
      {#each history as Cmd}
        <Cmd.component name={Cmd.name}  />
      {/each}
      <Input bind:history bind:query exitHandler={closeModal} />
    </div>
  </Modal>
</section>
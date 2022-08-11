<script lang="ts">

	import { commands, commandsIndex } from './register';
  import Wrong from './wrong.svelte';
  export let history: Array<any> ;
  export let query: string;
  export let exitHandler: any;
  export let ref: any = undefined;
  let input: string = '';

  let historyIndex = 0;

  $: historyIndex = history.length;

  const executeCommand = (event: SubmitEvent)=>{
    if(event.target){
      const formData = new FormData(event.target as HTMLFormElement);
      const {command} = Object.fromEntries(formData as unknown as Iterable<readonly any[]>);
      const index = commandsIndex.indexOf(command)

      if(!command) return;

      if(command === 'clear'){
        history = []
      }

      else if(command === 'exit'){
        history = []
        exitHandler();
      }

      else if(index >= 0){
        history = [...history, {component: commands[index].component, name: command }]
      }
      else{
        history = [...history, {component: Wrong, name: command}]
      }
      query = command;

      event.target.reset();

    }
  }

  const onHistoryRequest = (e: KeyboardEvent)=>{
    const {key} = e;

    if(key === 'ArrowUp'){
        if(historyIndex > 0){
          input = history[--historyIndex].name;
        }
    }
    else if(key === 'ArrowDown'){
        if(historyIndex < history.length - 1){
           input = history[++historyIndex].name;
        }
    }
  }

</script>

<style>
  .line{
    display: flex;
    gap: 0.5rem;
  }

  .command-area{
    background: transparent;
    border: none;
    outline: none;
    color: var(--clr-terminal-white);
    flex: 1;
  }
</style>

<form class="line" on:submit|preventDefault={executeCommand}>
  <label for="command-area">$</label>
  <input class="command-area" type="text" name="command" autocomplete="off" aria-label="Command goes here" on:keyup={onHistoryRequest} value={input} bind:this={ref} />
</form>

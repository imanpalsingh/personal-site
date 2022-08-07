<script lang="ts">
	import Help from './commands/help.svelte';
  import Command from './command.svelte';
  export let name: string;
</script>

<style lang="scss">
  span.command{
  color: var(--clr-terminal-brown);
  }
</style>

<Command {name} valid={false}>
    <span class="command">{name}</span>
    <span> is an incorrect command. If you need help, type </span>
    <span class="command">help</span>
</Command>
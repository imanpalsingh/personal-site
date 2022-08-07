<script lang="ts">
	import Command from './../command.svelte';
    import { commands } from '../register';
    export let name: string;
</script>

<style lang="scss">
    .help-desc{
        color: var(--clr-terminal-cyan);
    }

    .command{
        display: grid;
        gap: 2rem;
        margin: 1rem;
        grid-auto-flow: column;
        grid-auto-columns: 0.3fr 0.7fr;

        &-name{
            color: var(--clr-terminal-brown);
        }

        &-desc{
            color: var(--clr-terminal-purple);
        }
    }

</style>

<Command name={name} valid>
   <span class="help-desc">The available commands are</span>
   <div class="available-commands">
    {#each commands as cmd}
        <div class="command">
            <div class="command-name">{cmd.name}</div>
            <div class="command-desc">{cmd.desc}</div>
        </div>
    {/each}
   </div>

</Command>
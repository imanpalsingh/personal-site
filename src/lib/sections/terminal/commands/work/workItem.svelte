 <script lang="ts">
  import VscGithub from "svelte-icons-pack/vsc/VscGithub";
  import Icon from 'svelte-icons-pack/Icon.svelte';
  export let title: string;
  export let desc: string;
  export let link: string | undefined = undefined;
 </script>

 <style lang="scss">
  .work{
      border: 1px solid var(--clr-terminal-cyan);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      gap: 0.8rem;
      border-radius: 5px;
      transition: all 300ms linear;
      position: relative;

      &:hover{
        box-shadow: 10px 10px 125px 1px rgba(0,0,0,0.75);
      }

      .title{
        font-size: larger;
        font-weight: bold;
        border-bottom: 1px solid var(--clr-terminal-cyan);

      }

      .desc{
        flex: 1;
      }

      button{
        background: transparent;
        color: inherit;
        border: 1px solid white;
        padding: 0.2rem 0.5rem;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.2rem;
        transition: all 300ms linear;

        &:hover{
          background: var(--clr-terminal-white);
          color: black;
        }
      }
    }
 </style>

 <div class="work">
  <div class="title">{title}</div>
  <div class="desc">{desc}</div>
  {#if link}
    <a href={link} target="blank"><button>
      <Icon src={VscGithub} /> View on Github</button>
    </a>
  {/if}
</div>
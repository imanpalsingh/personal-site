<script lang="ts">
	import Command from './../command.svelte';
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import AiOutlineMail from "svelte-icons-pack/ai/AiOutlineMail";
  import FiGithub from "svelte-icons-pack/fi/FiGithub";
  export let name: string;
</script>

<style lang="scss">
    .contact{
        color: var(--clr-terminal-cyan);
        display: inline-flex;
        flex-direction: row;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .item{
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      align-items: center;
      color: var(--clr-primary-500);
    }
</style>

<Command name={name} valid>
   <div class="contact">
    I'm not on socials but feel free to ping me at
    <div class="item">
      <Icon src={AiOutlineMail} color="#faebd7" />
      imanpal@proton.me
    </div>
    or at my github
    <div class="item">
      <Icon src={FiGithub} color="#faebd7" />
      <a href="https://www.github.com/imanpalsingh">github.com/imanpalsingh</a>
    </div>
  </div>
</Command>
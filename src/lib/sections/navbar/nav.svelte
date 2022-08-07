<script>
  import Icon from  "../../../../static/icons/icon.svelte";
  import NavLink from './navLink.svelte';
  import RiLogoGithubLine from "svelte-icons-pack/ri/RiLogoGithubLine";
</script>

<style type="text/scss">
  header{
    display: flex;
    padding: 2rem;
    justify-content: space-evenly;
    gap: 2rem;
  }

  ul{
    display: flex;
    gap: 3rem ;
    font-family:  var(--ff-primary-400);
    letter-spacing: 0.1rem;

  }
</style>

<header>
  <div class="logo">
    <a href="/"><Icon /></a>
  </div>
  <nav>
    <ul>
      <NavLink icon={RiLogoGithubLine} href={'https://www.github.com/imanpalsingh'} />
    </ul>
  </nav>
</header>
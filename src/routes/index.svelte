<script lang="ts">
  import Me from "$lib/sections/index/index.svelte";
  import Terminal from '$lib/sections/terminal/index.svelte'
</script>


<style type="text/scss">

  section{
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }

  .console-cta{
    border-radius: 25px;
    padding: 1.5rem;
    font-family: var(--ff-primary-400);
    font-weight: lighter;
  }

</style>

<section>
  <Me />
  <div class="console-cta">Press ⌘ + K to launch the console</div>
  <Terminal />
</section>

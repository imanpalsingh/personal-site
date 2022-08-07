<script lang="ts">
	import Command from './../../command.svelte';
  import WorkItem from './workItem.svelte';
  export let name: string;
</script>

<style lang="scss">
  .info{
    color: var(--clr-terminal-cyan);
    margin-bottom: 1rem;
    width: 100%;
    text-align: center;
  }

  .recent-work{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 0.5rem;
  }
</style>

<Command name={name} valid>
   <div class="info">Some of my contributions are</div>
   <div class="recent-work">
    <WorkItem title="Pgfaker" desc={"A tool to take a masked dump of your postgres database"} link={"https://github.com/imanpalsingh/pg-faker"} />
    <WorkItem title="CMLL" desc={"A zero dependency machine learning library for C++"} link={"https://github.com/imanpalsingh/CMLL"} />
    <WorkItem title="Reactjs.org" desc={"The React documentation website"} link={"https://github.com/reactjs/reactjs.org"} />
    <WorkItem title="Covid-19 NN" desc={"Research of COVID-19 Detection using Convolutional and Generative models"} link={"https://github.com/imanpalsingh/COVID-19-Detection--from-X-rays"} />
    <WorkItem title="Sepsis P" desc={"Using deep learning for ealry sepesis detection from clinical time series data"} link={"https://github.com/imanpalsingh/SIH2020_UP49_Aeye_BCET"} />
    <WorkItem title="Closed Source" desc={"And a lot of closed soure work"} />
   </div>

</Command>
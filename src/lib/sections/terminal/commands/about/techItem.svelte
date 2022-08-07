<script lang="ts">
  import Icon from 'svelte-icons-pack/Icon.svelte';
  export let icon: any;
  export let name: string;
</script>

<style lang="scss">
  .tech-item{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }
</style>


<div class="tech-item"><Icon src={icon} color="white" /> <span>{name}</span></div>

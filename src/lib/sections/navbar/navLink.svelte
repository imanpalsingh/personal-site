<script type="ts">
  import Icon from 'svelte-icons-pack/Icon.svelte';
  export let icon: any;
  export let href: string;
</script>

<style lang="scss">
  li{
    font-weight: 300;
    transition: all 300ms ease-in-out;
    cursor: pointer;

    &:hover,&:focus{
    transition: all 300ms ease-in-out;
      text-decoration: underline var( --clr-primary-800) double;
    }
  }
</style>

<li class="link" title="me too">
  <a {href}><Icon src={icon} color="#ba702c" size={"20"} /></a>
</li>

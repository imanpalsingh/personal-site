<script lang="ts">
  export let name: string,  valid: boolean
</script>

<style lang="scss">
  .history{
    position: relative;
    margin-bottom: 1rem;
    .command{

      &.valid{
        color: var(--clr-terminal-success);
      }

      &.invalid{
        color: var(--clr-terminal-error);
      }

    }
  }
</style>

<div class="history">
  <div class={`command ${valid? "valid": "invalid"} `}>{`$ ${name}`}</div>
  &rarr; <slot />
</div>
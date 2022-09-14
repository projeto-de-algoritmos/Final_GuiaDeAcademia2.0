<script>
  import Menu from './lib/Menu.svelte';
  import Sequencia from './lib/Sequencia.svelte';
  import { mostrar_sequencia } from './store';
</script>

<main>
  {#if $mostrar_sequencia == false}
    <Menu/>
  {:else}
    <Sequencia/>
  {/if}
</main>

<style>

</style>

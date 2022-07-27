<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import ReloadPrompt from './lib/ReloadPrompt.svelte';
  import { onMount } from 'svelte';

  onMount( async () => {
  })
</script>

<main>
    <div class="row justify-content-center">
      <div class="col">
        <ReloadPrompt />
      </div>
      <div class="col">
        <h1 class="text-center">Hola Typescript!</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col">
        <Counter />
      </div>
    </div>
</main>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>

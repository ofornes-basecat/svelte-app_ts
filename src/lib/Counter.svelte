<script lang="ts">
  export let count: number = 0;
  
  const increment = () => {
    count += 1;
  };
  const reset = () => {
    count = 0;
  };
</script>

  <div class="row justify-content-center">
    <div class="col-6 justify-content-center">
    <div class="p-3 border bg-light text-center">
      <button on:click={increment} type="button" class="btn btn-outline-success btn-lg position-relative" title="Incrementa el comptador">
        Increment<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill {count === 0 ? 'bg-danger' : 'bg-info'}">{count}</span>
      </button>
    </div>
  </div>
  <div class="col-6">
    <div class="p-3 border bg-light text-center">
      <button on:click={reset} disabled={count == 0} type="button" class="btn btn-danger btn-lg" title="Posa a zero el comptador">Reset</button>
    </div>
  </div>
</div>

<style>
</style>

<script lang="ts">
    import { useRegisterSW } from 'virtual:pwa-register/svelte';
  
    const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
      onRegistered(swr) {
        console.log(`SW registered: ${swr}`);
      },
      onRegisterError(error) {
        console.log('SW registration error', error);
      }
    });
  
    function close() {
      offlineReady.set(false)
      needRefresh.set(false)
    }
  
    $: toast = $offlineReady || $needRefresh;
  </script>
  
  {#if toast}
    <div
      class="pwa-toast"
      role="alert"
    >
      <div class="message">
        {#if $offlineReady}
        <span>
          Aplicació preparada per a treballar sense connexió
        </span>
        {:else}
        <span>
          Nova versió disponible, cliqueu el botó de carregar per actualitzar.
        </span>
        {/if}
      </div>
      {#if $needRefresh}
        <button on:click={() => updateServiceWorker(true)}>
          Carregar
        </button>
      {/if}
      <button on:click={close}>
        Tancar
      </button>
    </div>
  {/if}
  
  <style>
      .pwa-toast {
          position: fixed;  
          right: 0;
          bottom: 0;
          margin: 16px;
          padding: 12px;
          border: 1px solid #8885;
          border-radius: 4px;
          z-index: 1;
          text-align: left;
          box-shadow: 3px 4px 5px 0 #8885;
          background-color: white;
      }
      .pwa-toast .message {
          margin-bottom: 8px;
      }
      .pwa-toast button {
          border: 1px solid #8885;
          outline: none;
          margin-right: 5px;
          border-radius: 2px;
          padding: 3px 10px;
      }
  </style>
  
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

declare module 'virtual:pwa-register/svelte' {
  // @ts-expect-error ignore when svelte is not installed
  import type { Writable } from 'svelte/store'

  export interface RegisterSWOptions {
    immediate?: boolean
    onNeedRefresh?: () => void
    onOfflineReady?: () => void
    onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void
    onRegisterError?: (error: any) => void
  }

  export function useRegisterSW(options?: RegisterSWOptions): {
    needRefresh: Writable<boolean>
    offlineReady: Writable<boolean>
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'script',
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.ico', 'svelte-512x512.png', 'svelte-192x192.png'],
      manifest: {
        name: "Hola Typescript",
        short_name: "hola-ts",
        description: "Aplicació de prova de concepte de web+pwa",
        theme_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'svelte-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'svelte-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
})

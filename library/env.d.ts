/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  // noinspection JSUnusedGlobalSymbols - suppresses "exported but not used" warning in WebStorm
  export default component
}

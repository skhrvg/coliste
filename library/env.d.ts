/// <reference types="vite/client" />
// noinspection JSUnusedGlobalSymbols - suppresses "exported but not used" warning in WebStorm

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

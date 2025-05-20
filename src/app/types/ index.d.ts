declare module '*.jpg'
declare module '*.png'
declare module '*.mp4' {
    const src: string
    export default src
}
declare module '*.webm' {
    const src: string
    export default src
}

declare type RootState = ReturnType<typeof import('./store').store.getState>
declare type AppDispatch = typeof import('./store').store.dispatch

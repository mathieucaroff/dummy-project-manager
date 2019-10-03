export const preventDefault = (callback: () => any) => (ev: Event) => {
   ev.preventDefault()
   callback()
}

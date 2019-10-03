export const ifEnter = (callback: () => any) => (ev: Event) => {
   if (ev.key == 'Enter') {
      callback()
      ev.preventDefault()
   }
}

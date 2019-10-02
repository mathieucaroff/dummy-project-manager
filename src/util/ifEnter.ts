export const ifEnter = (callback) => (ev) => {
   console.log({ ev })
   if (ev.key == 'Enter') {
      callback()
   }
}

import * as React from 'react'
import { createRef } from 'react'

export type InputProp = TextInputProp | DateInputProp

export interface TextInputProp {
   type: 'text'
   filter: (cb: () => any) => (ev: KeyboardEvent) => any
   handler: (s: string) => any
}

export interface DateInputProp {
   type: 'date'
   text: string
   filter: (cb: () => any) => (ev: KeyboardEvent) => any
   handler: (s: string) => any
}

export const InputComp = (prop: InputProp) => {
   type Ref = { current: HTMLInputElement }
   let inputRef: Ref = createRef()

   if (prop.type === 'text') {
      let { filter, handler } = prop
      return (
         <input
            type="text"
            ref={inputRef}
            onKeyDown={filter(() => {
               handler(inputRef.current.value)
            })}
         />
      )
   } else {
      let { text, filter, handler } = prop
      return (
         <span>
            <input type="date" ref={inputRef} />
            <button
               onClick={filter(() => {
                  handler(inputRef.current.value)
               })}
            >
               {text}
            </button>
         </span>
      )
   }
}

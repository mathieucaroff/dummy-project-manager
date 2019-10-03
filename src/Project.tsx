import * as React from 'react'
import { createRef } from 'react'
import { Project } from './model'
import { TaskComp, TaskHandlerObj } from './Task'
import { ifEnter } from './util/ifEnter'

export type ProjectProp = {
   project: Project
   taskHandling: (k: number) => TaskHandlerObj
   handleNewTask: (s: string) => void
}

export const ProjectComp = (prop: ProjectProp) => {
   let { project, taskHandling, handleNewTask } = prop
   let { name, taskList } = project

   type Ref = { current: HTMLInputElement }
   let inputRef: Ref = createRef()

   return (
      <div className="project">
         <h1>{name}</h1>
         <ol>
            {taskList.map((task, k) => (
               <li key={task.name}>
                  <TaskComp task={task} handling={taskHandling(k)} />
               </li>
            ))}
         </ol>
         <form>
            <label>
               Create new task
               <input
                  type="text"
                  ref={inputRef}
                  style={{ marginLeft: '1em' }}
                  onKeyDown={ifEnter(() => {
                     handleNewTask(inputRef.current.value)
                  })}
               ></input>
            </label>
         </form>
      </div>
   )
}

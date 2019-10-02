import * as React from 'react'
import { Project } from './model'
import { TaskComp } from './Task'
import { observer } from 'mobx-react'
import { ifEnter } from './util/ifEnter'
import { select } from './util/select'

export const ProjectComp = observer((prop: { project: Project }) => {
   let { project } = prop
   let { name, taskList } = project

   let handleNewTask = () => {}

   return (
      <div className="project">
         Project "{name}"
         <ol>
            {taskList.map((task) => (
               <li key={task.name}>
                  <TaskComp task={task}></TaskComp>
               </li>
            ))}
         </ol>
         <form>
            <label>
               New task
               <input
                  type="text"
                  onKeyDown={ifEnter(select('value')(handleNewTask))}
               ></input>
            </label>
         </form>
      </div>
   )
})

import './style.css'

import * as React from 'react'
import { useState } from 'react'
import { render } from 'react-dom'

import { createTask, Project } from './model'
import { ProjectComp } from './Project'
import { TaskHandlerObj } from './Task'

function main() {
   let defaultProject: Project = {
      name: 'Create an app fitting the criteria',
      taskList: [],
   }

   createTask({ name: 'Write down the types', project: defaultProject })
   let task = createTask({ name: 'Create the view', project: defaultProject })
   task.assignee = {
      name: 'Twi',
   }

   let ProjectApp = App(defaultProject)

   const rootElement = document.getElementById('root')
   render(<ProjectApp />, rootElement)
}

const App = (defaultProject: Project) => () => {
   const [project, setProject] = useState(defaultProject)

   let update = () => {
      console.log({ project })
      setProject({ ...project })
   }

   let handleNewTask = (name: string) => {
      createTask({ name, project })
      update()
   }

   let { taskList } = project

   console.log('App():', { taskList })

   let taskHandling = (k: number): TaskHandlerObj => ({
      handleSetAssignee: (name: string) => {
         taskList[k] = {
            ...taskList[k],
            assignee: {
               name,
            },
         }
         update()
      },
      handleSetStartDate: (d: string) => {
         console.log({ d })
         let date = new Date(d)
         if (date.getTime() === NaN) {
            console.error('Invalid date submitted')
            return
         }
         taskList[k] = {
            ...taskList[k],
            startDate: date,
         }
         update()
      },
      handleSetEndDate: (d: string) => {
         console.log({ d })
         let date = new Date(d)
         if (date.getTime() === NaN) {
            console.error('Invalid date submitted')
            return
         }
         taskList[k] = {
            ...taskList[k],
            endDate: date,
         }
         update()
      },
      handleDelete: () => {
         project.taskList.splice(k, 1)
         console.log('handleDelete', { project })
         update()
      },
   })

   return (
      <div className="App">
         <ProjectComp
            {...{
               project,
               taskHandling,
               handleNewTask,
            }}
         />
      </div>
   )
}

main()

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

   let task = createTask({
      name: 'Write down the types',
      project: defaultProject,
   })
   defaultProject.taskList.push(task)

   let startDate = new Date()

   let twiTask = createTask({
      name: 'Create the view',
      project: defaultProject,
      assignee: {
         name: 'Twi',
      },
      startDate,
      endDate: new Date(startDate.getTime() + 2 * 24 * 3600 * 1000),
   })
   defaultProject.taskList.push(twiTask)

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
      let task = createTask({ name, project })
      project.taskList.push(task)
      update()
   }

   let { taskList } = project

   console.log('App():', { taskList })

   let taskHandling = (k: number): TaskHandlerObj => ({
      handleSetAssignee: (name: string) => {
         taskList[k] = createTask({
            ...taskList[k],
            assignee: {
               name,
            },
         })
         update()
      },
      handleSetStartDate: (d: string) => {
         let date = new Date(d)
         console.log({ d, date })
         if (Number.isNaN(date.getTime())) {
            console.error('Invalid date submitted')
            return
         }
         taskList[k] = createTask({
            ...taskList[k],
            startDate: date,
         })
         update()
      },
      handleSetEndDate: (d: string) => {
         let date = new Date(d)
         console.log({ d, date })
         if (Number.isNaN(date.getTime())) {
            console.error('Invalid date submitted')
            return
         }
         taskList[k] = createTask({
            ...taskList[k],
            endDate: date,
         })
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

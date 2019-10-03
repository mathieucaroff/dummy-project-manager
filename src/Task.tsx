import * as React from 'react'
import { InputComp } from './components/InputComp'
import { Task } from './model'
import './task.css'
import { ifEnter } from './util/ifEnter'

export interface TaskHandlerObj {
   handleSetAssignee: (s: string) => void
   handleSetStartDate: (s: string) => void
   handleSetEndDate: (s: string) => void
   handleDelete: () => void
}

export interface TaskProp {
   task: Task
   handling: TaskHandlerObj
}

export const TaskComp = (prop: TaskProp) => {
   let { task, handling } = prop
   let { name, project, assignee, startDate, endDate, totalTimeInMs } = task

   let {
      handleSetAssignee,
      handleSetStartDate,
      handleSetEndDate,
      handleDelete,
   } = handling

   return (
      <div className="task">
         <h3>{name}</h3>
         <ul>
            <li>Project: "{project.name}"</li>
            {assignee && <li>Assignee: {assignee.name}</li>}
            {startDate && <li>Start date: {startDate}</li>}
            {endDate && <li>End date: {endDate}</li>}
            {totalTimeInMs !== undefined && (
               <li>Total time (h) {Math.floor(totalTimeInMs / 1000 / 3600)}</li>
            )}
         </ul>

         <form className="task-form">
            <label>
               Set Assignee
               <InputComp
                  type="text"
                  filter={ifEnter}
                  handler={handleSetAssignee}
               />
            </label>
            <label>
               Set Start Date
               <InputComp
                  type="date"
                  text="Validate"
                  handler={handleSetStartDate}
               />
            </label>
            <label>
               Set End Date
               <InputComp
                  type="date"
                  text="Validate"
                  handler={handleSetEndDate}
               />
            </label>
            <label>
               Set End Date
               <input
                  type="button"
                  value="Delete Task"
                  onClick={handleDelete}
               />
            </label>
         </form>
      </div>
   )
}

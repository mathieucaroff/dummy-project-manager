import * as React from 'react'
import { Task } from './model'
import { select } from './util/select'
import { ifEnter } from './util/ifEnter'
import { observer } from 'mobx-react'

export const TaskComp = observer((prop: { task: Task }) => {
   let { task } = prop
   let { name, project, assignee, startDate, endDate, totalTimeInMs } = task

   let handleAssignee = () => {}
   let handleStartDate = () => {}
   let handleEndDate = () => {}
   let handleDelete = () => {}

   return (
      <div className="task">
         <h3>{name}</h3>
         <ul>
            <li>Project: "{project.name}"</li>
            {assignee && <li>Assignee: {assignee}</li>}
            {startDate && <li>Start date: {startDate}</li>}
            {endDate && <li>End date: {endDate}</li>}
            {totalTimeInMs !== undefined && (
               <li>Total time (h) {Math.floor(totalTimeInMs / 1000 / 3600)}</li>
            )}
         </ul>
         <form>
            <label>
               Set Assignee
               <input
                  type="text"
                  onKeyDown={ifEnter(select('value')(handleAssignee))}
               ></input>
            </label>
            <label>
               Set Start Date
               <input
                  type="text"
                  onKeyDown={ifEnter(select('value')(handleStartDate))}
               ></input>
            </label>
            <label>
               Set End Date
               <input
                  type="text"
                  onKeyDown={ifEnter(select('value')(handleEndDate))}
               ></input>
            </label>
            <label>
               <input value="Delete task" type="button" onClick={handleDelete}></input>
            </label>
         </form>
      </div>
   )
}
}

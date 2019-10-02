export interface Project {
   name: string
   taskList: Task[]
}

export interface Task {
   name: string
   project: Project
   assignee?: Pony
   startDate?: Date
   endDate?: Date
   readonly totalTimeInMs?: number
}

export interface Pony {
   name: string
}

export type CreateTaskProp = Pick<Task, 'name' | 'project'>

export let createTask = ({ name, project }: CreateTaskProp) => {
   let task: Task = {
      name,
      project,
      get totalTimeInMs() {
         let { endDate: end, startDate: start } = this
         if (end !== undefined && start !== undefined) {
            return end.getTime() - start.getTime()
         }
         return undefined
      },
   }
   project.taskList.push(task)
   return task
}

// Test
let project: Project = {
   name: 'Create an app fitting the criteria',
   taskList: [],
}

let task: Task = createTask({
   name: 'Write down the types',
   project,
})

console.assert(task.totalTimeInMs === undefined)

let student: Pony = {
   name: 'Twilight SPARKLE',
}

task.assignee = student

task.startDate = new Date()

console.assert(task.totalTimeInMs === undefined)

const hour = 3600 * 1000

task.endDate = new Date(task.startDate.getTime() + 3 * hour)

console.assert(task.totalTimeInMs === 3 * hour)

export interface Project {
   readonly name: string
   readonly taskList: Task[]
}

export interface Task {
   readonly name: string
   readonly project: Project
   readonly assignee?: Pony
   readonly startDate?: Date
   readonly endDate?: Date
   readonly totalTimeInMs?: number
}

export interface Pony {
   readonly name: string
}

export type CreateTaskProp = Task

export let createTask = (prop: CreateTaskProp) => {
   let { project, endDate: end, startDate: start } = prop

   let totalTimeInMs
   if (end !== undefined && start !== undefined) {
      totalTimeInMs = end.getTime() - start.getTime()
   }
   let task: Task = { ...prop, totalTimeInMs }

   return task
}

// Test
let project: Project = {
   name: 'Create an app fitting the criteria',
   taskList: [],
}

let student: Pony = {
   name: 'Twilight SPARKLE',
}

let task: Task = createTask({
   name: 'Write down the types',
   assignee: student,
   project,
})

console.assert(task.totalTimeInMs === undefined, 'should be undefined first')

let startDate = new Date()

task = createTask({
   ...task,
   startDate,
})

console.assert(task.totalTimeInMs === undefined, 'should be undefined second')

const hour = 3600 * 1000

task = createTask({
   ...task,
   endDate: new Date(startDate.getTime() + 3 * hour),
})

console.assert(task.totalTimeInMs === 3 * hour, 'should be 3 hours')

import * as React from 'react'
import { render } from 'react-dom'

import { Project, createTask } from './model'
import { ProjectComp } from './Project'

import './style.css'

let project: Project = {
   name: 'Create an app fitting the criteria',
   taskList: [],
}

createTask({ name: 'Write down the types', project })

createTask({ name: 'Create the view', project })

function App() {
   return (
      <div className="App">
         <ProjectComp project={project} />
      </div>
   )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)

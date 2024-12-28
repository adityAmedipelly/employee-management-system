import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './contex/AuthContext.jsx'
import TaskContex from './contex/TaskContex.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthContext>
  <TaskContex>
    <App/>
  </TaskContex>
   </AuthContext>
  </StrictMode>,
)

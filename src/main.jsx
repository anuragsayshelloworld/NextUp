import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext'
import { TaskListProvider } from './context/TaskListContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <TaskListProvider>  
    <App />
    </TaskListProvider>
    </AuthProvider> 
    </BrowserRouter>
  </StrictMode>,
)

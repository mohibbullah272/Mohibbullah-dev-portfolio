import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Home from './Page/Home.jsx'
import ProjectDetail from './components/ProjectDetail.jsx'
import { ToastContainer } from 'react-toastify'


const router =createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:([
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/details/:id',
        element:<ProjectDetail></ProjectDetail>,
        
      }
    ])
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  <ToastContainer />
  </StrictMode>,
)

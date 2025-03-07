import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from './About.tsx'
import Service from './Service.tsx'
import Contact from './Contact.tsx'
import Menu from './Menu.tsx'
import Bill from './Bill.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router=createBrowserRouter([
  {
  path: '/',
  element: <App />,
  },
  {
    path: '/about',
    element: <About />,
    },
    {
      path: '/service',
      element: <Service />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/bill',
        element: <Bill />,
      },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   < RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

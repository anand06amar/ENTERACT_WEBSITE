import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Team from './components/Team.jsx'
import Header from './components/Header.jsx'
import Contact from './components/Contact.jsx'
import Awards from './components/Awards.jsx'
import Events from './components/Events.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Header />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "awards",
        element: <Awards />,
      },
      {
        path: "events",
        element: <Events />,
    },

    ],
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

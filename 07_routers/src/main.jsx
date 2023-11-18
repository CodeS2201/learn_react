import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, {githubInfoLoader} from './components/Github/Github'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// * difficult method:
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

// * easier method:

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route 
      path='github'
      loader={githubInfoLoader}
      element={<Github />}/>
      <Route path=':userid' element={<User />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Home, About, Contact,User,Github,loadGithub } from './components/';
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/contact" element={<Contact />}> </Route>
      <Route path="/about" element={<About />}> </Route>
      <Route path="/user/:userId" element={<User/>}> </Route>
      <Route path="/github" loader={loadGithub} element={<Github/>}></Route>
    </Route>)
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)

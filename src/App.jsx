import AboutMe from './components/About/about'
import ContactMe from './components/Contact/ContactMe'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Login from './components/Login/login'
import { useState } from 'react'
import {  RouterProvider, createBrowserRouter, Navigate, createRoutesFromElements, Route} from 'react-router-dom'
import './App.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<AboutMe />} />
))

function App() {
  const [loggedIn, setLoggedIn] = useState(null)

  const handleLogin = (e) => {
    if (!loggedIn)
    setLoggedIn(true)
  }


  return (
    <RouterProvider router={router}/>
  )
}

export default App

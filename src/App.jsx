import AboutMe from './components/About/about'
import ContactMe from './components/Contact/ContactMe'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Login from './components/Login/login'
import { useState } from 'react'
import {  RouterProvider, createBrowserRouter, Navigate, createRoutesFromElements} from 'react-router-dom'
import './App.css'

const router = createBrowserRouter(createRoutesFromElements(
  
))

function App() {
  const [loggedIn, setLoggedIn] = useState(null)

  const handleLogin = (e) => {
    if (!loggedIn)
    setLoggedIn(true)
  }


  return (
    <div>
      <AboutMe />
      <ContactMe />
      <Projects />
      <Skills />
      <Login handleLogin={handleLogin} />
    </div>
  )
}

export default App

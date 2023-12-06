import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Dashboard from "../pages/Dashboard";
import Login from '../pages/Login'
import Logout from '../pages/Logout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/signup">Sign Up</a></li>
      <li><a href="/login">Log In</a></li>
      <li><a href="/logout">Log Out</a></li>
      <li><a href="/dashboard">Dashboard</a></li>
    </ul>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/dashboard' element={<Dashboard />} />
     </Routes>
    </>
  )
}

export default App

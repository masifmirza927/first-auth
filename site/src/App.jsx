import React, { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Signup from './pages/Signup'
import Dashboard from "./pages/Dashboard";
import Login from './pages/Login'
import Logout from './pages/Logout'
import Create from './pages/Create'
import CheckAuth from './components/CheckAuth'

function App() {
  const [isLogin, setIsLogin] = useState(false);

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
        <Route path='/login' element={<Login setIsLogin={setIsLogin} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/logout' element={<Logout setIsLogin={setIsLogin} />} />

        <Route path='/dashboard' element={<CheckAuth isLogin={isLogin}><Dashboard /></CheckAuth>} >
          <Route path='create' element={<Create />} />
        </Route>

     </Routes>
    </>
  )
}

export default App

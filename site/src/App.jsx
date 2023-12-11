import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Signup from './pages/Signup'
import Dashboard from "./pages/Dashboard";
import Login from './pages/Login'
import Logout from './pages/Logout'
import Create from './pages/Create'
import CheckAuth from './components/CheckAuth'
import Navbar from './components/Navbar'
import { MyContext } from './MyContext'

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <MyContext.Provider value={{ isLogin, setIsLogin }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/logout' element={<Logout />} />

          <Route path='/dashboard' element={<Dashboard />} >
            <Route path='create' element={<Create />} />
          </Route>

        </Routes>
      </MyContext.Provider>

    </>
  )
}

export default App

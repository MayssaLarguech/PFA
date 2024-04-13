import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from './Components/LoginSignUp/SignUp'
import Login from './Components/LoginSignUp/Login'
import PasswordReset from './Components/LoginSignUp/PasswordReset'
import Home from './pages/home/Home'
import Land from './pages/land/LandPage'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/' element={<Land/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App




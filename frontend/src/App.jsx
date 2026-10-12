import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/home/index.jsx'
import Login from './pages/login/index.jsx'
import { Navigate } from 'react-router-dom'

 
const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />

        <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
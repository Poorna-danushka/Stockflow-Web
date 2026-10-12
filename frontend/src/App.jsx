import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/home/index.jsx'
import Login from './pages/login/index.jsx'

 
const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
  )
}

export default App
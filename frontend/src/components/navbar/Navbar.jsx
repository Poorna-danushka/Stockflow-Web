import React from 'react'
import {Button} from '../ui/button.jsx'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigator = useNavigate();
  return (
    <div className='flex justify-between items-center h-16 bg-background border-b border-border px-6 hover:cursor-pointer'>
        <div className='text-xl font-bold hover:cursor-pointer' onClick={() => navigator('/')}>StockFlow</div>
        <Button onClick={() => navigator('/login')}>Login</Button>
    </div>
  )
}

export default Navbar
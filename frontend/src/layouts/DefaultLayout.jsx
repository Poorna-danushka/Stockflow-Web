import Navbar from '../components/navbar/Navbar.jsx'
import React from 'react'
import Sidebar from '../components/sidebar/Sidebar.jsx'

const DefaultLayout = ({ children }) => {
  return (
    <div className='flex flex-row min-h-screen'>
        <Sidebar/>
        <div className='flex-1 bg-gray-200'>
            <Navbar/>
            <div className='p-6'>
               {children}
            </div>
        </div>
    </div>
  )
}

export default DefaultLayout
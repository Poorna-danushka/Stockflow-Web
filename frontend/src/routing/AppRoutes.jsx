import React from 'react'
import {Routes , Route, Navigate} from 'react-router-dom'
import {routes} from '../data/routes.jsx'

const AppRoutes = () => {
  return (
    <Routes>
        {routes.map((route)=>(
          <Route key={route} path={route.route} element={route.page} />
        ))}
      
        <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default AppRoutes
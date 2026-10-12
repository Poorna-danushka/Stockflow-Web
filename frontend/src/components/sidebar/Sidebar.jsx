import React from 'react'
import { SidebarHeader, SidebarProfile, SidebarNav } from './index'

const Sidebar = () => {
  return (
    <div className='w-60 border-r border-border bg-background flex flex-col'>
      <SidebarHeader />
      <SidebarNav />
      <SidebarProfile />
    </div>
  )
}

export default Sidebar
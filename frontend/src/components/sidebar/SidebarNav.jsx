import React from 'react'
import { sidebarNav } from '../../data/nav'

const SidebarNav = () => {
  return (
    <div>
      {sidebarNav.map((item) => (
          <div key={item.label} className="flex items-center gap-3 h-11">
            <item.icon className='size-4 shrink-0'/>
            <span className="text-sm">{item.label}</span>
            {item.badge && (
              <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-[#e35d31] text-xs text-primary-foreground">
                {item.badge}
              </span>
            )}
          </div>
        )
      )}
    </div>
  )
}

export default SidebarNav
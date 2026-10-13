import React from 'react'
import { sidebarNav } from '../../data/nav'
import { NavLink, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

const SidebarNav = () => {
  const { pathname } = useLocation()

  return (
    <div>
      {sidebarNav.map((item) => {
        const isActive = pathname === item.path

        return (
          <NavLink
            to={item.path}
            key={item.path}
            className={cn(
              'flex w-full rounded-lg px-3 items-center gap-3 h-11 hover:bg-[#fdf1ed] hover:text-gray-600',
              isActive && 'bg-[#fdf1ed] text-[#e35d31]'
            )}
          >
            <item.icon className="size-4 shrink-0" />

            <span className="text-sm">{item.label}</span>

            {item.badge && (
              <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-[#e35d31] text-xs text-primary-foreground">
                {item.badge}
              </span>
            )}
          </NavLink>
        )
      })}
    </div>
  )
}

export default SidebarNav
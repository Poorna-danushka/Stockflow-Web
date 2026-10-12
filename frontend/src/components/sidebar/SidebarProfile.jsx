import React from 'react'
import { UserRound } from 'lucide-react'

const SidebarProfile = () => {
  return (
    <div className='px-4 py-4 mt-auto border-t border-border '>
      <div className='flex gap-3 items-center'>
        <div className='flex items-center justify-center shrink-0 rounded-full bg-[#fde1ed] text-[#a63d1d] '>
          <UserRound className='size-4 strokeWidth={1.8}' />
        </div>
        <div className='leading-tight'>
          <p className='truncate text-sm font-medium text-foreground'>Poorna Danushka</p>
          <p className='truncate mt-0.5 text-[11px] text-muted-foreground'>Administrator</p>
          <p className='truncate mt-0.5 text-[10px] text-muted-foreground'>Colombo Central Warehouse</p>
        </div>
      </div>
    </div>
  )
}


export default SidebarProfile
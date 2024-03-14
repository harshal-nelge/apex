import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className=' h-screen w-[20%] bg-gray-500 flex flex-col items-center justify-center space-y-3'>
        
        <NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    ''
  }
>
  Add Your Work
</NavLink>
    </div>
  )
}

export default Sidebar;

import DashMain from '@/component/DashMain'
import Sidebar from '@/component/Sidebar'
import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const DepartmentDash = () => {
  const token = Cookies.get('jwtToken')
  
 
   
  
  useEffect(()=>{ 
    
    // des()
  })
  return (
    <div className=' flex '>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default DepartmentDash;

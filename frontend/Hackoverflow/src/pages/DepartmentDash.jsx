import Cookies from 'js-cookie'
import React, { useEffect } from 'react'

const DepartmentDash = () => {
  const token = Cookies.get('jwtToken')
  const getData = async () => {
    const res = await fetch("http://localhost:5000/v1/department/dashboard",{
        method:"post",
        headers:{
            'content-type':"application/json"
        },
        body: JSON.stringify({token:token})
       })
       const data  = await res.json()
       console.log(data);
  }
  useEffect(()=>{
    getData()
  })
  return (
    <div>
      
    </div>
  )
}

export default DepartmentDash;

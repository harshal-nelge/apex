import Sidebar from '@/component/Sidebar'
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
  const des = async() => {
    const res = await fetch("http://127.0.0.1:5000/nlp-model",{
      method:"post",
      headers:{
        'content-type':"application/json"
    },
    body: JSON.stringify({new_string:"Efficient street light installation and maintenance services, including ground digging for infrastructure. Our experienced team utilizes cutting-edge technology and meticulous planning to seamlessly install street lights, including ground excavation when necessary."})
   })
    
   const data = await res.json()
   console.log(data);
  }
  useEffect(()=>{ 
    // getData()
    des()
  })
  return (
    <div>
      <Sidebar/>
    </div>
  )
}

export default DepartmentDash;

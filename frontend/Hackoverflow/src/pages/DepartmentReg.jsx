import React, { useRef, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const DepartmentReg = () => {
    const [islogin,setIsLogin] = useState(true)
    const navigate = useNavigate()
    const userName = useRef()
    const departmentName = useRef()
    const password = useRef()

    const toogle = () => {
      setIsLogin(!islogin)
      console.log(setIsLogin);
    }
    const handleSubmit =  async(e)=> {
      e.preventDefault()
      if(!islogin){
      const res = await fetch("http://localhost:5000/auth/department/register",{
        method:"post",
        headers:{
            'content-type':"application/json"
        },
        body: JSON.stringify({username:userName.current.value,password:password.current.value,departmentName:departmentName.current.value})
       })
       const data  = await res.json()
       const token = data.token
       console.log(token);
       Cookies.set('jwtToken',token)
       navigate("/departmentDashBoard")
      }else{
        const res = await fetch("http://localhost:5000/auth/department/login",{
        method:"post",
        headers:{
            'content-type':"application/json"
        },
        body: JSON.stringify({username:userName.current.value,password:password.current.value})
       })
       const data  = await res.json()
       const token = data.token
       console.log(token);
       Cookies.set('jwtToken',token)
       navigate('/departmentDashBoard')
      }
    }
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-100 "> 
    <h1 className=' my-8 text-3xl font-semibold'>{!islogin? "Register" : "Login"}</h1>
      <div className=" px-8 py-16 border  border-gray-300 rounded-lg shadow-2xl flex justify-center items-center w-1/4 ">
      <form   className="flex flex-col space-y-8  w-full">
      <input
        type="text"
        placeholder="Name"
        ref={userName}
        className="   border border-slate-400 shadow-xl placeholder-slate-500 p-2 rounded-lg"
      />
      
     {!islogin && <input type="text" 
      placeholder="Department Name"
      ref={departmentName}
      className="  border border-slate-400 shadow-xl placeholder-slate-500 p-2 rounded-lg"
      />}
      <input
        type="password"
        placeholder="Password"
        ref={password}
        className="  border border-slate-400 shadow-xl placeholder-slate-500 p-2 rounded-lg "
      />
      <div className=' flex space-x-3 w-full'>
      <button onClick={handleSubmit} className="px-4 py-2  w-1/2 bg-slate-900 border border-slate-900 text-white rounded-lg hover:bg-white hover:text-slate-900">Submit</button>
      <div  className="px-4 py-2 w-1/2 text-center bg-white border border-black text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white " onClick={toogle}>{islogin? "Register" : "Login"}</div>
      </div>
      </form>
      </div>

      
    </div>
  )
}

export default DepartmentReg;

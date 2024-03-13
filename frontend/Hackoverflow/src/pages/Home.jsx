import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const toAdmin =  ()=>{
            navigate('/adminAuth')
    }
    const toDepartment = () =>{
        navigate('/departmentAuth')
    }
    
    
  return (
    <div >
      <div className='flex justify-center items-center space-x-16'>
          <button className=' px-6 py-3 bg-black text-white' onClick={toAdmin}>Admin</button>
          <button className=' px-6 py-3 bg-black text-white' onClick={toDepartment}>Admin</button>

      </div>
    </div>
  )}



export default Home;

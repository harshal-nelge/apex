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
    <>
    <div className=' h-screen w-full  absolute -z-10 '>
      <img src="https://img.freepik.com/free-photo/high-angle-pie-chart-with-cities_52683-98166.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704585600&semt=ais" 
      className='h-full w-full object-contain'
      alt="" />

    </div>
    <div className=' flex h-screen w-full justify-center items-center flex-col space-y-16 absolute z-10 bg-black/45' >
      <h1 className=' text-6xl font-extrabold text-white '>Infra Connect </h1>
    <div className='flex justify-center items-center space-x-16'>
   
    <button className=' px-6 py-3 bg- text-white border border-white rounded-lg' onClick={toDepartment}>Register Here</button>
    </div>
    </div>
    
    
    </>
  )}
 


export default Home;

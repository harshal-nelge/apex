import Cookies from "js-cookie";
import React, { useRef, useState } from "react";
import Map from "@/pages/Map";
import { useSelector } from "react-redux";
import store from "@/utlis/store";
const DashMain = () => {
  const token = Cookies.get("jwtToken");
  const name = useRef();
  const des = useRef();
  const departmentName = useRef()
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  const [option5, setOption5] = useState(false);
  const [option6, setOption6] = useState(false);
  const [option7, setOption7] = useState(false);
  console.log(option1);
  console.log(token);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/v1/department/addWorks", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        taskName: name.current.value,
        description: des.current.value,
        taskLongitude: coordinates.lng.toFixed(2),
        taskLatitude: coordinates.lat.toFixed(2),
        underGroundInfrastructure: option1,
        roadWork: option2,
        publicSpaceEnhacement: option3,
        underWaterConstruction: option4,
        demolition: option5,
        greenInfrastructureProject: option6,
        electricalServices: option7,
        token: token
      })
    });
    const data = await res.json();
    // console.log(data);
   
    //   const nlpres = await fetch("http://localhost:4000/nlp-model",{
    //     method:"post",
    //     headers:{
    //       'content-type':"application/json"
    //   },
    //   body: JSON.stringify({new_string:des?.current.value})
    //  })
      
    //  const nlpdata = await nlpres.json()
    //  console.log(nlpdata);
     
    
  
  
  };
  const coordinates = useSelector(store => store.coordinates)
  return (
    
    <div className=" flex items-center justify-center bg-gray-100 w-[80%]">
    <form onSubmit={handleSubmit} className=" flex flex-col space-y-6 bg-white p-8 rounded-lg shadow-xl w-[90%]">
      <input type="text" placeholder="Name" ref={name} className="px-4 py-2 placeholder-slate-600 font-semibold border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
      <textarea placeholder="Description" ref={des} className="h-32 px-4 py-2 placeholder-slate-600 font-semibold border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"></textarea>
      <iframe src="https://apex-gemini.onrender.com/" frameborder="0" className=" h-[60vh]"></iframe>
      <label>Choose Your Location</label>
      <Map   /> 
      <div className=" space-y-1">
      <h3>Latitude:{coordinates.lat?.toFixed(2)}</h3>
      <h3>Longitude:{coordinates.lng?.toFixed(2)}</h3>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center space-x-2">
          <input type="checkbox" onChange={() => setOption1((prev) => !prev)} id="option1" />
          <label htmlFor="option1" className=" font-semibold text-md" >Under Ground Infra</label>
        </div>
        <div class="flex items-center space-x-2">
          <input type="checkbox" onChange={() => setOption2((prev) => !prev)} id="option2" />
          <label htmlFor="option2"  className=" font-semibold text-md">Road Work</label>
        </div>
        <div class="flex items-center space-x-2">
          <input type="checkbox" onChange={() => setOption3((prev) => !prev)} id="option3" />
          <label htmlFor="option3" className=" font-semibold text-md">Public Space Enhancement</label>
        </div>
        <div class="flex items-center space-x-2">
          <input type="checkbox" onChange={() => setOption4((prev) => !prev)} id="option4" />
          <label htmlFor="option4" className=" font-semibold text-md">Under Water Construction</label>
        </div>
        <div class="flex items-center space-x-2">
          <input type="checkbox" onChange={() => setOption5((prev) => !prev)} id="option5" />
          <label htmlFor="option5" className=" font-semibold text-md">Demolition</label>
        </div>
        <div class="flex items-center space-x-2">
          <input type="checkbox" onChange={() => setOption6((prev) => !prev)} id="option6" />
          <label htmlFor="option6" className=" font-semibold text-md">Green Infrastructure Project</label>
        </div>
        <div class="flex items-center space-x-2">
          <input type="checkbox" onChange={() => setOption7((prev) => !prev)} id="option7" />
          <label htmlFor="option7" className=" font-semibold text-md">Electrical Services</label>
        </div>
      </div>
  
      <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">Submit</button>
    </form>
  </div>
  
  );
};

export default DashMain;

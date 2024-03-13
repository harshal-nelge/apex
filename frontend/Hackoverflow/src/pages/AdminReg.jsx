import React, { useRef, useState } from "react";
import Cookies from 'js-cookie'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AdminReg = () => {
<<<<<<< Updated upstream
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [admin, setAdmin] = useState("");
 
  const handleSubmit = async () => {
    console.log("Handle submit is working");
    try {
      const response = await fetch(
        "http://localhost:5000/auth/admin/register",
        {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            username: name,
            password: pass,
            adminName: admin,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData);
      setData(responseData);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div className="flex  justify-center items-center h-screen w-full space-y-2 flex-col ">
      <form>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          className=" outline placeholder-black p-2"
        />

        <input
          type="text"
          placeholder="admin name"
          onChange={(e) => setAdmin(e.target.value)}
          className=" outline placeholder-black p-2"
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPass(e.target.value)}
          className=" outline placeholder-black p-2 "
        />
        <button onClick={handleSubmit}> submit</button>
   
=======
    const [data,setData] = useState("")
    const userName = useRef()
    const adminName = useRef()
    const password = useRef()
    const handleSubmit =  async(e)=> {
      e.preventDefault()
      const res = await fetch("http://localhost:5000/auth/admin/register",{
        method:"post",
        headers:{
            'content-type':"application/json"
        },
        body: JSON.stringify({username:userName.current.value,password:password.current.value,adminName:adminName.current.value})
       })
       const data  = await res.json()
       const token = data.token
       console.log(token);
       Cookies.set('jwtToken',token)
    }
  
  return (
    <div className="flex  justify-center items-center h-screen w-full bg-gray-100 ">
      <div className=" p-8 border  border-gray-300 rounded-lg shadow-2xl flex justify-center items-center ">
      <form  onSubmit={handleSubmit} className="flex flex-col space-y-8 ">
      <input
        type="text"
        placeholder="Name"
        ref={userName}
        className="   border border-slate-400 shadow-xl placeholder-slate-500 p-2 rounded-lg"
      />
      
      <input type="text" 
      placeholder="Admin Name"
      ref={adminName}
      className="  border border-slate-400 shadow-xl placeholder-slate-500 p-2 rounded-lg"
      />
      <input
        type="password"
        placeholder="password"
        ref={password}
        className="  border border-slate-400 shadow-xl placeholder-slate-500 p-2 rounded-lg "
      />
      <button type="submit" className="px-4 py-2  bg-slate-900 text-white rounded-lg hover:bg-white hover:text-slate-900">Submit</button>
      
>>>>>>> Stashed changes
      </form>
      </div>

      
    </div>
  );
};

export default AdminReg;

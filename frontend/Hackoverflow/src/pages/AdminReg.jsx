import React, { useRef, useState } from "react";

const AdminReg = () => {
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
   
      </form>
    </div>
  );
};

export default AdminReg;

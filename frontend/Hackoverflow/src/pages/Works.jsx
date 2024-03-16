import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { addCoordinates } from "@/utlis/coordinateSlice";
import store from "@/utlis/store";
import { DataArray } from "@mui/icons-material";

const Works = () => {
  const dispatch = useDispatch();
  const coordinates = useSelector((store) => store.coordinates);
  const [cord, setCord] = useState({});
  const [data, setData] = useState([]);
  const [dataBase,setDataBase] = useState([])
  const token = Cookies.get("jwtToken");
  useEffect(() => {
    dispatch(addCoordinates(cord));
  }, [cord, dispatch]);
  // const llm = async()=>{
  //     const res = await fetch()
  // }
 
  const sendCord = async () => {
    const res = await fetch(
      "http://localhost:5000/v1/department/getSimilarWorks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
          taskLatitude: coordinates?.lat,
          taskLongitude: coordinates?.lng,
        }),
      }
    );

    const data = await res.json();
    console.log(data);
    const arr = []
    arr.push(data?.map((des) => des.description))
    console.log(coordinates?.des);
    setDataBase(arr)
    const nlp = async () =>{
        if(dataBase){
        const res = await fetch("http://127.0.0.1:4000/nlp-model",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
             new_string : coordinates?.des,
             database_string:dataBase
            })
        })
        const data = await res.json()
        console.log(data);
      }
    }
      nlp()
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/v1/department/myWorks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: token }),
        });
        if (res.ok) {
          const jsonData = await res.json();
          setData(jsonData);
        } else {
          console.error("Failed to fetch data:", res.status, res.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

  

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the first render
  // console.log(data);

  return (
    <div className="  justify-items-start  mt-24 w-full h-screen">
      <div
        className="flex justify-center space-x-4 space-y-12 w-[80vw] items-center  px-8"
        onClick={sendCord} 
      >
        <Accordion type="single" collapsible className=" px-32 shadow-2xl border border-slate-400 w-[100%] rounded-xl">
          {data?.map((item, index) => ( 
            <AccordionItem value={item.taskName} key={index} className="flex justify-between">
              <div className="flex flex-col">
              <AccordionTrigger>{item.taskName}</AccordionTrigger>
              <AccordionContent>{item.description}</AccordionContent>
              </div>
              <button
          className="  px-4 py-2  w- 1/4 bg-slate-900 border border-slate-900 text-white rounded-lg hover:bg-white hover:text-slate-900 "
          onClick={() =>
            setCord({ lat: item.taskLatitude, lng: item.taskLongitude , des:item.description})
          }
        >
          Sync
        </button>
            </AccordionItem>
          ))}
        </Accordion>
       
      </div>
    </div>
  );
};

export default Works;

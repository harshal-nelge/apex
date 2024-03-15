import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { addCoordinates } from '@/utlis/coordinateSlice';
import store from '@/utlis/store';

const Works = () => {
    const dispatch = useDispatch()
    const coordinates = useSelector( store => store.coordinates)
    const [cord,setCord] = useState({})
    const [data, setData] = useState([])
    const token = Cookies.get("jwtToken")
    useEffect(() => {
        dispatch(addCoordinates(cord)); 
    }, [cord, dispatch]);
    const sendCord = async () => {
        const res = await fetch("http://localhost:5000/v1/department/getSimilarWorks", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ token: token,taskLatitude:coordinates?.lat,taskLongitude:coordinates?.lng }) 
        });

        const data = await res.json()
        console.log(data);
       
        
    }
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:5000/v1/department/myWorks", {
                    method: "POST",
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({ token: token }) 
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
        <Accordion type="single" collapsible className="w-full px-32">
            {data?.map((item, index) => (
                <div className='flex justify-between ' onClick={sendCord}>
                    <AccordionItem value={item.taskName} key={index}>
                    <AccordionTrigger>{item.taskName}</AccordionTrigger>
                    <AccordionContent>
                        {item.description}
                    </AccordionContent>
                </AccordionItem>
                
                <button className=' outline text-black' onClick={() => (setCord({lat:item.taskLatitude,lng:item.taskLongitude}))}>Synced</button>
                </div>
            ))}
        </Accordion>
    );
};

export default Works;

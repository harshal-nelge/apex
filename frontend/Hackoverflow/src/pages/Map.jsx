import React, { useState } from "react";
// import { GoogleMap, Marker } from "@googlemaps/react-wrapper";
import { useJsApiLoader ,GoogleMap ,Marker} from "@react-google-maps/api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCoordinates } from "@/utlis/coordinateSlice";

const Map = () => {
    const dispatch = useDispatch()
    const center = {lat:48.854 , lng:2.2945}
    const handleMapClick = (event) => {
        const clickedLat = event.latLng.lat();
        const clickedLng = event.latLng.lng();
        
         dispatch(addCoordinates({ lat: clickedLat, lng: clickedLng }));
      };
 const {isLoaded} = useJsApiLoader({
    googleMapsApiKey:"AIzaSyAGMHn4USKUAvfbV-Qan_JAFZaPUi1NoL0"
 })
 console.log(isLoaded); 

 if (!isLoaded) {
    return(<p>Not Loaded</p>)
 }else{
  return (
    <div className="w-full h-[60vh]">
    <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          onClick={handleMapClick}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            
          }}
        //   onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          
        </GoogleMap>
        </div>
  )};
  
};

export default Map;
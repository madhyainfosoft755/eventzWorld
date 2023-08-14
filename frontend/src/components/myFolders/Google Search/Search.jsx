import Autocomplete from "react-google-autocomplete";
import React, { useState } from "react";
import HandleLocation from '../Google Search/HandleLocation'

function Search({onLocationChange}) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [email, setEmail] = useState("");


  // const handlePlaceSelected = (place) => {
  //   const lat = place.geometry.location.lat();
  //   const lng = place.geometry.location.lng();
  //   const formatted_address = place.formatted_address;

  //   // Call the onLocationChange function if it's a valid function
  //   if (typeof onLocationChange === "function") {
  //     onLocationChange(lat, lng, formatted_address);
  //   }
  // };
  

  // const handlePlaceSelected = (place) => {
  //   const lat = place.geometry.location.lat();
  //   const lng = place.geometry.location.lng();
  //   const formatted_address=place.formatted_address;
    

  //   console.log(place,"add")
  //   console.log("place")



  //   setLatitude(lat); 
  //   setLongitude(lng); 
  //   onLocationChange(lat, lng,formatted_address); 
    
    
  // };
 
  

  return (
    <>
      
        <Autocomplete
         style={{width:"90%", height:"38px", marginLeft:"4px", marginBottom:"20px", paddingRight:"20px", padding: "12px",
         border:"2px solid black",
          resize: "vertical",}}
          apiKey={"AIzaSyAU0DASyH7nq0ypKB-en5f7TK2dDPvWpJI"}
          // onPlaceSelected={}
          

          
        />


        <div>
      
      
          
        </div>
        
        
      
      
    </>
  );
}


export default Search;




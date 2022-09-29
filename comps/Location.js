import { useState } from "react";
import { useEffect } from "react";



const Location = () => {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      console.log(position.coords.latitude, position.coords.longitude);
    });
    }, []);
    
    
    return (
        <>
        <h1>Location</h1>
        <p>Latitude: {lat}</p>
        <p>Longitude: {long}</p>
        </>
    );

    
    
}
 
export default Location;
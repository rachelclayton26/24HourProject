import { useState, useEffect } from "react";
// import Geolocate from './Geolocation';

const key = "OvrxrgwbLdNgnfNdzJ2XBn7FjNPeo3qXF4i0byF78";
const baseUrl = "https://api.nasa.gov/planetary/earth/imagery";

const Nasa = () => {
  const [geolocation, setGeolocation] = useState();
  const [result, setResult] = useState();

  if('geolocation' in navigator) {
    console.log("geolocation is available");
    const currentPostion = navigator.geolocation.getCurrentPosition(
      function(position) {
        return position;
      }
    );
    

    setGeolocation(currentPostion)
  } else {
    console.log("geolocation IS NOT available");
  }
  
    useEffect(() => {
      if (geolocation) {
        const latitude = geolocation.coords.lat;
        const longitude = geolocation.coords.lon; 
        const dates = new Date().toISOString().split("T")[0];
        const urlForImage = `${baseUrl}?lon=${longitude}&lat=${latitude}&date=${dates}&dim=0.19&api_key=${key}` || "";
      }
      if(urlForImage) {
        fetchImage();
      }
    });

  const fetchImage = async () => {
    console.log(urlForImage);
    fetch(urlForImage)
      .then((res) => {
        console.log("success:", res);
        return setResult(res.url);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    };
  return (
    <div>
      <img src={result} alt="pic"></img>
    </div>
  );
};
export default Nasa;
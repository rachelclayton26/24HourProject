import { useState, useEffect } from "react";
// import Geolocate from './Geolocation';

const key = "OvrxrgwbLdNgnfNdzJ2XBn7FjNPeo3qXF4i0byF78";
const baseUrl = "https://api.nasa.gov/planetary/earth/imagery";

let urlForImage;

const Nasa = () => {
  const [geolocation, setGeolocation] = useState();
  const [result, setResult] = useState();

  if('geolocation' in navigator) {
    console.log("geolocation is available");
    console.log(navigator.geolocation.getCurrentPosition)
  } else {
    console.log("geolocation IS NOT available");
  }

  if (geolocation) {
    const latitude = geolocation.coords.lat;
    const longitude = geolocation.coords.lon; 
    const dates = new Date().toISOString().split("T")[0];
    urlForImage = `${baseUrl}?lon=${longitude}&lat=${latitude}&date=${dates}&dim=0.19&api_key=${key}`;
    // urlForImage= 'https://api.nasa.gov/planetary/earth/imagery?lon=-86.148003&lat=39.791000&date=2014-02-01&api_key=na5CzAGj6sT9mL17haLlVCOJ646wZCYXYb8OyKs2';
  }
    useEffect(() => {
      if(urlForImage) {
        fetchImage();
      }
    },[]);

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
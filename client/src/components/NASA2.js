import React from 'react';
import {useState, useEffect} from 'react';

const key = "OvrxrgwbLdNgnfNdzJ2XBn7FjNPeo3qXF4i0byF78";
const baseUrl = "https://api.nasa.gov/planetary/earth/imagery";
export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);
  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `${baseUrl}?lon=${lng}&lat=${latitude}&date=${dates}&dim=0.19&api_key=${key}`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);  
  if (!photoData) return <div></div>;
  return (
    <div>
      <img
        src={photoData.url}
        alt={photoData.title}
        />
    </div>

  )
}
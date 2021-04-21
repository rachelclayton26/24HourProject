import { useState, useEffect } from "react";
const key = "OvrxrgwbLdNgnfNdzJ2XBn7FjNPeo3qXF4i0byF78";
const baseUrl = "https://api.nasa.gov/planetary/earth/imagery";

const Nasa = (props) => {
  const latitude = props.coords.lat;
  const longitude = props.coords.lon;
  const dates = new Date().toISOString().split("T")[0];

  const urlForImage = `${baseUrl}?lon=${longitude}&lat=${latitude}&date=${dates}&dim=0.19&api_key=${key}`;

  const [result, setResult] = useState({});

  useEffect(() => {
    fetchImage();
  });

  const fetchImage = async () => {
    console.log(urlForImage);
    fetch(urlForImage)
      .then((res) => {
        console.log("res:", res);
        return res.url;
      })
      .then((res) => {
        console.log(res);
        setResult(res);
      });
  };
  return (
    <div>
      <img src={result} alt="pic"></img>
    </div>
  );
};
export default Nasa;
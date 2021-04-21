// import {useState, useEffect} from "react";
// import Geolocate from './Geolocation.js';

// // const baseURL = "https://api.openweathermap.org/data/2.5/weather";
// // const key = "07eaa6a8ac52b5a89c32ab04f65d24c2";

// //let url = baseURL + '?lat=' + `${lat} + '&lon='+ `${lon} + '&appid=' + key;

// function weatherApp(props) => {

//     const apiKey = "07eaa6a8ac52b5a89c32ab04f65d24c2";
//     const baseURL = "https://api.openweathermap.org/data/2.5/weather";

    
//     let [lat, setLat] = useState('');
//     let [lon, setLon] = useState('');

//     useEffect(() => {
//     fetch(`${baseURL}?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`)
//     .then(response => response.json())
//     .then(data => console.log(data)); 
//     },[]);

//     const DegreeToggle = (props) => {

//      const fahrenheit = Math.round(reading.main.temp)
//     const celsius = Math.round((fahrenheit - 32) * 5/9)
   
//     return (
//             <React.Fragment>
//                 <div className = "form-check form-check-inline">
//                     <input 
//                     class = "form-check-input"
//                     type = "radio"
//                     name = "degree-type"
//                     id = "celsius"
//                     value = "metric" 
//                     checked = {degreeType === "celsius"}
//                     onChange ={updateForecastDegree}/>
    
//                     <label class = "form-check-label" for = "celsius">Celsius</label>
//                 </div>
//                 <div className = "form-check form-check-inline">
//                     <input
//                     class = "form-check-input"
//                     type = "radio"
//                     name = "degree-type"
//                     id = "farenheit"
//                     value = "imperial" 
//                     checked = {degreeType === "fahrenheit"}
//                     onChange = {updateForecastDegree}/>
//                     <label class = "form-check-label" for = "farenheit">Farenheit</label>
//                 </div>
//             </React.Fragment>
//         );
//     };
// };

// export default openWeather;
// const fahrenheit = Math.round(reading.main.temp)
// const celsius = Math.round((fahrenheit - 32) * 5/9)

fetch('https://api.openweathermap.org/data/2.5/weather?lat=34&lon=139&appid=07eaa6a8ac52b5a89c32ab04f65d24c2&units=imperial')
.then(response => response.json())
.then(data => console.log(data))



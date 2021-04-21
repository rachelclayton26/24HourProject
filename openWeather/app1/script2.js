//import {useEffect, useState} from 'react';

function openWeather(props) {

    const apiKey = "07eaa6a8ac52b5a89c32ab04f65d24c2";
    const url = `http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}`;

    const [temp, setTemp] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
  
    // const [lat, setLat] = useState('');
    // const [lon, setLon] = useState('');

    useEffect(() => {
        fetch(url)
        .then(response => {
            return response.json();
    }) .then(data => console.log(data));

    setTemp(data.main.temp);
    setWindSpeed(data.wind.speed);

    // setLon(data.coord.lon);
    // setLat(data.coord.lat);
    });
return (
    <div>
        <div id = "temp">
            The current temperature is: {temp}
            {/*Hoping this will be a toggle for C/F */}
            {<React.Fragment>
                 <div className = "form-check form-check-inline">
                     <input 
                    class = "form-check-input"
                    type = "radio"
                    name = "degree-type"
                    id = "celsius"
                    value = "metric" 
                    checked = {degreeType === "celsius"}
                    onChange ={updateForecastDegree}/>
    
                    <label class = "form-check-label" for = "celsius">Celsius</label>
                </div>
                <div className = "form-check form-check-inline">
                    <input
                    class = "form-check-input"
                    type = "radio"
                    name = "degree-type"
                    id = "farenheit"
                    value = "imperial" 
                    checked = {degreeType === "fahrenheit"}
                    onChange = {updateForecastDegree}/>
                    <label class = "form-check-label" for = "farenheit">Farenheit</label>
                </div>
            </React.Fragment>}

            {/*This might also work for a C/F toggle
            /* <div id ="temp">
                The current temperature is: {temp}
                {tempToggle ? tempCelsius(temperature).toFixed(2) : temp}&deg;{tempToggle ? "C" : "F"}
            </div> */}

            <div id="wind">
                The wind speed is `${windSpeed}`
            </div>
            {/* onClick call for the above the C/F toggle
            <Button onClick = {() => (setTempToggle)(!tempToggle)}>Toggle Temp</Button> */}
        </div>
  </div>
)};

export default openWeather;
import React from 'react';
import Geolocate.js;

const baseURL = "https://api.openweathermap.org/data/2.5/onecall";
const key = "07eaa6a8ac52b5a89c32ab04f65d24c2";
let url;

//let url = baseURL + '?lat=' + `${lat} + '&lon='+ `${lon} + '&appid=' + key;

const weatherApp = (props) => {
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');

    const fetchWeather = () => {

    fetch(`${baseURL}?lat=${lat}&lon=${lon}&exclude=minutely,daily&appid=${key}`)
    .then(response => response.json())
    .then(data => console.log(data.list)); 


    useEffect(() => {
        fetchWeather()
        console.log(weatherApp);
        }, []);
    }

    return (
    <div>
       <WeatherApp/>
    </div>
);
};

export default openWeather;

// 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,daily&appid=07eaa6a8ac52b5a89c32ab04f65d24c2//
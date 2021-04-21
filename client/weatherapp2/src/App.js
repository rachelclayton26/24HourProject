import React from 'react';
import {useState} from 'react';

const api ={
key: "07eaa6a8ac52b5a89c32ab04f65d24c2",
base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = e => {
    if(e.key==="Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&appid=${api.key}`)
      .then( res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
    });
  }
}

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className="App">
      <main>
        <div className = "search-box">
          <input
          type ="text"
          className="search-bar"
          placeholder= "search"
          onChange = {e => setQuery(e.target.value)}
          value = {query}
          onKeyPress = {search}></input>
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
        <div className = "location-box">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className = "date">{dateBuilder(new Date())}</div>
        </div>
        <div className = "weather-box">
          <div className="temp">
            {Math.round(weather.main.temp)}
          </div>
          <div className = "weather">{weather.weather[0].main}</div>
        </div>
        </div>
        ) : ('')}

      </main>
    </div>
  );
}

export default App;

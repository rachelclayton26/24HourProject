import React from 'react';
//import apiConfig from '../../client/src/apiKeys';
// import DayCard from './dayCard';
// import DegreeToggle from './DegreeToggle';


const key = "07eaa6a8ac52b5a89c32ab04f65d24c2";
class WeekContainer extends React.Component {
    // state = {
    //     fullData: [],
    //     dailyData: [],
    //     degreeType: "farenheit"
    // }
//////////// fetch from openWeather - only calls daly weather data //////
        componentDidMount = () => {
            const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${apiConfig.owmKey}`

            fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading.dt_text.includes("18:00:00"))
    //             this.setState({
    //                 fullData: data.list,
    //                 dailyData: dailyData
    //             }, () => console.log(this.state))
    //     })
    // }

    // updateForecastDegree = event => {
    //     this.setState({
    //         degreeType: event.target.value
    //     }, () => console.log(this.state))
    // }

    // formatDayCards = () => {
    //     return this.state.dailyData.map((reading, index) => <DayCard reading = {reading} key = {index}/>)
    // }
        
    render() {
        return (
            <div>
                hello world
                {/* {this.formatDayCards()} */}
            </div>
        )
        }
    }
    
//}//


export default WeekContainer;
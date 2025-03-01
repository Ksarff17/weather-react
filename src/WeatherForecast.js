import React, {useState} from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import Axios from "axios"

export default function WeatherForecast(props){
    let [Forecast, setForecast] = useState("");
    let [Loaded, setLoaded] = useState(false);


    function handleResponse(response){
        setLoaded(true);
        setForecast({
            maxTemp: response.data.daily[0].temperature.maximum,
            minTemp: response.data.daily[0].temperature.minimum,
            iconUrl: response.data.daily[0].condition.icon_url,
            iconDescription: response.data.daily[0].condition.icon,
            dt: response.data.dt,
        })
    }

    if(Loaded){
        return (
            <div className="WeatherForecast">
                <div className ="row mt-4">
                    <div className="col">  
                        <WeatherForecastDay data={Forecast[0]}/>
                        
                    </div>  
                </div>
            </div>
        )
} else{
    let query = props.location.city
    let apiKey =`7o60e48082t80b65afac13511e68bed5`
    let apiUrl =`https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}&units=imperial`
    Axios.get(apiUrl).then(handleResponse)

    return null; 
}
}

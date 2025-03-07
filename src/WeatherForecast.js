import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import Axios from "axios"
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    let [forecast, setForecast] = useState(null);
    let [loaded, setLoaded] = useState(false);
   

    useEffect(()=>{
        setLoaded(false);
    }, [props.location]);

    function handleResponse(response){
        setLoaded(true);
        setForecast(response.data.daily);
       
        
        
    }

    if(loaded){
        return (
            <div className="WeatherForecast">
                <div className ="row mt-4"> 
                    {forecast.map(function (dailyForecast, index){
                        if (index < 5){
                        return(
                            <div className="col" key={index}>  
                            <WeatherForecastDay info={dailyForecast}/>
                        </div>  
                        );
                    }
                    })}
                       
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

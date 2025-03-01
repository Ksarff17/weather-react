import React from "react"

export default function WeatherForecastDay(props){
    return(
        <div>
            <div className="WeatherForecast-day">{props.dt}</div>
                        <div >
                            <img src={props.iconUrl} alt={props.iconDescriptiion} />
                        </div>
                        <div className= "WeatherForecast-temp">
                            <span className="WeatherForecast-max">{Math.round(props.maxTemp)}°</span>
                            <span className="WeatherForecast-min">{Math.round(props.minTemp)}°</span>
                        </div>
        </div>
    )
}
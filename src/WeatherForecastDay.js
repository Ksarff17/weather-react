import React from "react"



export default function WeatherForecastDay(props){
   
    function  MaxTemp(){
        let temperature = Math.round(props.info.temperature.maximum)
        
        return `${temperature}°`
    }
    function  MinTemp(){
        let temperature = Math.round(props.info.temperature.minimum)
        
        return `${temperature}°`;
        
    }
    function IconUrl(){
        let icon = props.info.condition.icon_url
        return `${icon}`
    }
    function IconDescription(){
        
        let description = props.info.condition.icon
        return `${description}`
    }
   
    function Day(){
        let date = new Date(props.info.time * 1000)
        let days =["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"]
        let day = date.getDay()
        return days[day];
    }

    return(
        <div>
            <div className="WeatherForecast-day">{Day()}</div>
                        <div >
                            <img src={IconUrl()} alt={IconDescription()} />
                        </div>
                        <div className= "WeatherForecast-temp">
                            <span className="WeatherForecast-max">{MaxTemp()}</span>
                            <span className="WeatherForecast-min">{MinTemp()}</span>
                        </div>
        </div>
    )

}
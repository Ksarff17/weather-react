import React, {useState} from "react";

export default function WeatherTemperature(props){
const [unit, setUnit]=useState("fahrenheit")

function convertToFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
}

function convertToCelsius(event){
    event.preventDefault();
    setUnit("celsius");
    
   


}

if (unit === "fahrenheit"){
    return(
        <div>
            <span className="temperature">{props.fahrenheit}</span>
            <span className="unit">°F | <a href="/" onClick={convertToCelsius}>°C</a></span>
        </div>)
} else{
    let celsius =Math.round( (props.fahrenheit-32)* 5/9)
    return(
        <div>
            <span className="temperature">{celsius}</span>
            <span className="unit"><a href="/" onClick={convertToFahrenheit}>°F</a> | °C</span>
        </div>)
}
   
};
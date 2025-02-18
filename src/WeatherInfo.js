import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
            <div className="row mt-3 mb-3 text-start">
                <h1>{props.info.city}</h1>
                <ul>
                  <li>
                    <FormattedDate date={props.info.date}/>
                    </li>
                  <li className="text-capitalize"> {props.info.description}</li>
                </ul>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-3">
                       <img src={props.info.icon} alt={props.info.description} className="weather-icon" />
                      </div>
                      <div className="col-9 text-start">
                        <WeatherTemperature fahrenheit={props.info.temperature}/>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                  <ul className="current-details">
                    <li>Humidity: <strong>{props.info.humidity}% </strong></li>
                    <li>Wind:<strong> {props.info.wind}mph</strong></li>
                  </ul>
                </div>
                </div>
        </div>
    )
}
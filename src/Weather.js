import React, {useState} from "react"
import FormattedDate from "./FormattedDate"
import "./Weather.css"
import axios from "axios"


export default function Search() {
    let [city, setCity] = useState("");
    let [ready, setReady] = useState(false);
    let [weather, setWeather] = useState("");
  
    function displayWeather(response) {
      setReady(true);
      setWeather({
        temperature: Math.round(response.data.temperature.current),
        humidity: Math.round(response.data.temperature.humidity),
        wind: Math.round(response.data.wind.speed),
        description: response.data.condition.description,
        icon: response.data.condition.icon_url,
        city: response.data.city,
        date: new Date(response.data.time * 1000),
      });
      
    }
    function handleSubmit(event) {
      event.preventDefault();
      let apiKey ='7o60e48082t80b65afac13511e68bed5'
      let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
      axios.get(url).then(displayWeather);
      
    } 
  
   
    function updateCity(event) {
      setCity(event.target.value);
    }
  
    let form = (
  
      <form onSubmit={handleSubmit} className="searchForm">
        <div className="row">
          <div className="col-9">
            <input type="search" 
            autoFocus="on"
            placeholder="Enter a city" 
            onChange={updateCity} 
            className="city w-100" />
          </div>
          <div className="col-3">
            <input type="submit" 
            value="Search" 
            className="btn btn-success w-100"/>
          </div>
        </div>
      </form>
      
    );
  
    if (ready) {
      return (
        <div className="Weather">
          {form}
              <div className="row mt-3 text-start">
                <h1>{weather.city}</h1>
                <ul>
                  <li>
                    <FormattedDate date={weather.date}/>
                    </li>
                  <li className="text-capitalize"> {weather.description}</li>
                </ul>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-3">
                       <img src={weather.icon} alt={weather.description} className="weather-icon" />
                      </div>
                      <div className="col-9 text-start">
                        <div><span className="temperature">{weather.temperature}</span><span className="unit">°F</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                  <ul className="current-details">
                    <li>Humidity: <strong>{weather.humidity}% </strong></li>
                    <li>Wind:<strong> {weather.wind}mph</strong></li>
                  </ul>
                </div>
                </div>
               
        </div>
      );
    } else {
   
      return (
        <div>
          {form}
          <h3 className="text-start">Loading...</h3>
        </div>
      );
    }
  }
  
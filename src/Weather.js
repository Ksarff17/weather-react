import React, {useState} from "react"
import "./Weather.css";
import axios from "axios"


export default function Search() {
    let [city, setCity] = useState("");
    let [loaded, setLoaded] = useState(false);
    let [weather, setWeather] = useState("");
  
    function displayWeather(response) {
      setLoaded(true);
      setWeather({
        temperature: Math.round(response.data.main.temp),
        humidity: Math.round(response.data.main.humidity),
        wind: Math.round(response.data.wind.speed),
        description: response.data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        city: response.data.name,

      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ed238469f9b5e9d801834270e65449bc&units=imperial`;
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
  
    if (loaded) {
      return (
        <div className="Weather">
          {form}
              <div className="row mt-3 text-start">
                <h1>{weather.city}</h1>
                <ul>
                  <li className="currentDate">Monday Feb. 15th, 2025</li>
                  <li className="description"> {weather.description}</li>
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
      return form;
    }
  }
  
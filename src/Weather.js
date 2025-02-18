import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";


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
          <WeatherInfo info={weather}/>  
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
  
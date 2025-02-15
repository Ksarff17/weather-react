import React from "react"
import "./Footer.css"

export default function Footer(){
    return(
        <footer className="Footer">
        <p>
          This project was coded by {""}
          <a href="https://github.com/Ksarff17" target="_blank" rel="noreferrer">
            Katie Sarff
          </a>{" "}
          and is on {""}
          <a
            href="https://github.com/Ksarff17/SheCodes-Weather_App"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on {""}
          <a href="https://universal-weather-app.netlify.app/" target="_blank" rel="noreferrer">
            Netlify
          </a>
        </p>
      </footer>
    
    );
}
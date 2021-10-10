import React from "react";

const api ={
  key: "c2fd752a0ccd93b6d644f7d7a011b51d",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {

  const dateBuilder = (d) =>{
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Monday", "tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();


    return [day, date, month, year];
  } 



  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
          type="text"
          className="search-bar"
          placeholder="search.."
          />
        </div>
        <div className="location-box">
          <div className="location">Chennai</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            15°c
          </div>
          <div className="weather">
            Sunny
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

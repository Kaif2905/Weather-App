import { useState } from "react";
import { Link } from "react-router-dom";

const api = {
  key: "ac0b9d5a3d2e0a5cca208fabf3c1e333",
  base: "https://api.openweathermap.org/data/2.5/",
};

//  function apicall(city){

//   fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
//   .then(res =>res.json())
//   .then(result => {
//     // console.log(result);
//   setM(result);
//   return{m}
//   });
//  }

function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState("");

  function apicall(city) {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);

        setWeather(result);
      });
  }

  return (
    <div className="app">
      <header className="head">
        <h1>Weather App</h1>
        <input
          className="btn"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => apicall(search)}>Search</button>
        <hr></hr>
        <div className="side1">
          <h1>Top Cities</h1>
          <button onClick={() => apicall("Mumbai")}>
            <label>Mumbai</label>
          </button>
          <br></br>
          <button onClick={() => apicall("Delhi")}>
            <label>Delhi</label>
          </button>
          <br></br>
          <button onClick={() => apicall("Kolkata")}>
            <label>Kolkata</label>
          </button>
          <br></br>
          <button onClick={() => apicall("Chennai")}>
            <label>Chennai</label>
          </button>
          <br></br>
          <button onClick={() => apicall("Raipur")}>
            <label>Raipur</label>
          </button>
          <br></br>
        </div>

        {typeof weather.main !== "undefined" ? (
          <div className="s1">
            <>
              <p>{weather.name}</p>

              <p>{weather.main.temp}°C</p>
              <p>{weather.weather[0].main}</p>
              <p>{weather.weather[0].description}</p>
            </>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}
export default Weather;

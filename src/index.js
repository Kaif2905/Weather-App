import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login.jsx';
import Weather from './Weather.jsx';




//weather code stated `` from here:-
//  const api={
//   key:'ac0b9d5a3d2e0a5cca208fabf3c1e333',
//   base:'https://api.openweathermap.org/data/2.5/',
//  };

// function Weather()
// { const [search,setSearch]=useState("");
// const  [weather,setWeather]=useState("");

//   function searchpressed()
//   {
//     // console.log(search);
//     fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)


//     .then(res =>res.json())
//     .then(result => {
//       console.log(result);
//       setWeather(result);
//     });

//   };
// return (
//   <div className='app'>
//   <header className='head'>
//     <h1>Weather App</h1>
//  <input type='text' placeholder='Search...' onChange={(e)=>setSearch(e.target.value)} />
//  <button onClick={ searchpressed }>Search</button>

//   {typeof weather.main !== 'undefined' ? (
//     <>
//     <p>{weather.name}</p>

// <p>{weather.main.temp}°C</p>
// <p>{weather.weather[0].main}</p>
// <p>{weather.weather[0].description}</p></>
//   ):(
//     ""
//     )}

//  </header>
// </div>

// )}











const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/weather" element={<Weather />} />



    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

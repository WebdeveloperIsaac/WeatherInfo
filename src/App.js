import React,{ useState } from 'react';
import  fetchWeather  from './api/fetchWeather';
import './App.css';
import Footer from './components/Footer';

function App() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState([]);

    
    const search = async (e) => {
      //that is calling via an await function the query that is passed
        if(e.key === 'Enter'){
          const data = await fetchWeather(query);
          setWeather(data);
          setQuery('');
        }
    }
    
    return (
    <div className='main-container'>
    <input type='text' className='search' placeholder='Enter your TimeZone Place' value={query}/** Direct State ge Query Send Madadhu*/ onChange={(e)=> setQuery(e.target.value)} onKeyPress={search}></input>
    {weather.main && (
      <div className="city">
        <h2 className="city-name">
          <span>{weather.name}</span>
          <sup>{weather.sys.country}</sup>
        </h2>
        <div className="city-temp">
          {Math.round(weather.main.temp)}
          <sup>&deg;C</sup>
        </div>
        <div className="info">
        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].desccription}>
        </img>
        <p>{weather.weather[0].description}</p>
        </div>
      </div>
    )}
    <Footer/>
    </div>
  )
}

export default App
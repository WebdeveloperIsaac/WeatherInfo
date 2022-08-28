import React,{ useState } from 'react';
import fetchWeather from './api/fetchWeather';
import './App.css';

function App() {
    const [query, setQuery] = useState('');
  
    const search = async (e) => {
        
    }
    
    return (
    <div className='main-container'>
    <input type='text' className='search' placeholder='Search I weather Engine' value={query} onChange={(e)=> setQuery(e.target.value)}></input>
    </div>
  )
}

export default App
import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/weather';
const key ='be589bfce947635b03b9fbdfc811c79a';

const fetchWeather = async (query) =>{
    const data = await axios.get(url,{
        params:{
            q:query,
            units:'metric',
            APPID:key
        }
    });
    return data;
}


export default fetchWeather;
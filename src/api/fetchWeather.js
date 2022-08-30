import axios from 'axios';
//first step like all those apis i save the key and URl
const url = 'https://api.openweathermap.org/data/2.5/weather';
const key ='be589bfce947635b03b9fbdfc811c79a';

//now we creating an asyncronous function and then pass the query as a param
/* Now we get the data for it We use Axios here not http ok alva adu movies app ge matra 
await function get method alli url matthe params(API documentation du) i am going to pass
then return The Data */

const fetchWeather = async (query) =>{
    const { data } = await axios.get(url,{
        params:{
            q:query,
            units:'metric', //these are the supported in the APi  
            APPID:key
        }
    });
    return data;
}


export default fetchWeather;
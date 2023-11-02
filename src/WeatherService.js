 const API_KEY = "34d4ef290efd7b7119ec6cbd16e728c8";

 const getWeatherData = async(city,units = "metric") =>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}& units = ${units}`;

    const data = await fetch(URL).then((res) => res.json()).then((data) => data);

    console.log(data);
 };

 export {getWeatherData};


import hotBg from './assets/hot.jpg';
import coldBg from './assets/cold.jpg';
// import winterBg from './assets/winter.jpg';

// import Des from '.components/Des';
// import Des from './components/des';
import { useEffect,useState} from 'react';
import Description from './components/Description';
import { getWeatherData } from './WeatherService';
// import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
function App() {

  const[weather,setWeather] = useState(null);
  const[units,setUnits] = useState("metric");

  useEffect(() =>{
    const fetchWeatherDatas = async () =>
    {
      const data = await getWeatherData("paris",units);
      // console.log(data);
      setWeather(data);
    };
    fetchWeatherDatas();
},[]);

  return (
<div className="app" style={{backgroundImage:`url(${coldBg})` }}>
  <div className = "overlay">
    {
      weather && (
        <div className= "container">
      <div className='section section__inputs'>
        <input type="text" name="city" placeholder='Enter City..' />
        <button> °F </button>

      </div>
      <div className='section section__temperature'>
        <div className="icon">
          <h3>{`${weather.name},${weather.country}`}</h3>
          <img src={weather.iconURL}
          alt = "weatherIcon"/>
          <h3>{weather.description}</h3>
        </div>
        <div className='temperature'>
          <h1>{`${weather.temp.toFixed()} °${units === 'metric' ? 'C': 'F'}`}</h1>
        </div>
      </div>

      {/* botton description */}
      <Description weather={weather} 
      units = {units}
      />
    </div>
        
      )
    }
    
  </div>

    {/* <Description /> */}
</div>
  );
}

export default App;

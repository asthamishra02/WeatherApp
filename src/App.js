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
  const [city,setCity] = useState("Paris");
  const[weather,setWeather] = useState(null);
  const[units,setUnits] = useState("metric");
  const[bg,setBg] = useState(coldBg)

  useEffect(() =>{
    const fetchWeatherDatas = async () =>
    {
      const data = await getWeatherData(city,units);
      // console.log(data);
      setWeather(data);

      // const threshold = units === 'metric' ? 20 : 60;
      // if(data.temp<=threshold) setBg(coldBg);
      // else setBg(hotBg);
      
    };
    fetchWeatherDatas();
},[units,city]);
const handleUnitsClick = (e) => {
  const button = e.currentTarget;
  const currentUnit = button.innerText.slice(1);
  // const curren
  // console.log(currentUnit);
  const isCelsius = currentUnit === 'C';
  button.innerText = isCelsius ? 'ºF' : 'ºC';
  setUnits(isCelsius ? 'metric' : 'imperial');

};
const enterKeyPressed = (e) =>{
  if (e.keyCode === 13){
    setCity(e.currentTarget.value);
    e.currentTarget.blur();
  }

}
  return (
<div className="app" style={{backgroundImage:`url(${bg})` }}>
  <div className = "overlay">
    {
      weather && (
        <div className= "container">
      <div className='section section__inputs'>
        <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder='Enter City..' />
        <button onClick={(e) => handleUnitsClick(e)}> °F </button>

      </div>
      <div className='section section__temperature'>
        <div className="icon">
          <h3>{`${weather.name},${weather.country}`}</h3>
          <img src={weather.iconURL}
          alt = "weatherIcon"/>
          <h3>{weather.description}</h3>
        </div>
        <div className='temperature'>
          <h1>{`${weather.temp.toFixed()-273} °${units === 'metric' ? 'C': 'F'}`}</h1>
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

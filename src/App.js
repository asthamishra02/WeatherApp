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

  useEffect(() =>{
    const fetchWeatherDatas = async () =>
    {
      const data = await getWeatherData('Paris');
      console.log(data);
    };
    fetchWeatherDatas();
},[]);

  return (
<div className="app" style={{backgroundImage:`url(${coldBg})` }}>
  <div className = "overlay">
    {
      weather && {
        
      }
    }
    <div className= "container">
      <div className='section section__inputs'>
        <input type="text" name="city" placeholder='Enter city' />
        <button> °F </button>

      </div>
      <div className='section section__temperature'>
        <div className="icon">
          <h3>London,GB</h3>
          <img src="https://openweathermap.org/img/wn/02d@2x.png" alt = "weatherIcon"/>
          <h3>Cloudy</h3>
        </div>
        <div className='temperature'>
          <h1>34 °C</h1>
        </div>
      </div>

      {/* botton description */}
      <Description />
    </div>
  </div>

    {/* <Description /> */}
</div>
  );
}

export default App;

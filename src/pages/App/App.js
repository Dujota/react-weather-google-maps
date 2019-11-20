import React, { Component } from 'react';
import './App.css';

// Utilities
import { getCurrentLatLng } from '../../services/geolocation';
import { getCurWeatherByLatLng } from '../../services/weatherApi';

// Components
import Map from '../../components/Map/Map';



class App extends Component {
  // Initiaize State
  state = {
    lat: null,
    lng: null,
    temp: null,
    icon:''
  }

  async componentDidMount() {
    const { lat, lng } = await getCurrentLatLng();
    const weatherData  = await getCurWeatherByLatLng(lat, lng);
    const { main, weather } = weatherData;
    const [ firstWeatherReport ] = weather;
    const {icon } = firstWeatherReport;

    this.setState({
      lat,
      lng,
      temp: Math.round(main.temp),
      icon,
     });
  }

  render() {
    const { lat, lng, temp, icon } = this.state;

    return (
      <div className='App'>
        <Map lat={lat} lng={lng}/>
        <header className='App-header'>

          {/* Temp in degrees */}
          <div>{temp}&deg;</div>

          REACT WEATHER

          {/* Icon if available */}
          {
            icon &&
            <img
            src={`https://openweathermap.org/img/w/${icon}.png`} alt='Current Conditions'/>
          }
        </header>
      </div>
    );
  }

}

export default App;

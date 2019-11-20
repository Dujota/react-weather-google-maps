import { weatherAPI } from '../../keys'

export function getCurWeatherByLatLng(lat, lng) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${weatherAPI}`

  return fetch( url, {mode:'cors'}).then(response => response.json())
 }



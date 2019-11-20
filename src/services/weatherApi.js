
export function getCurWeatherByLatLng(lat, lng) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d3945aa316355ce92bb8cc10bf63e3da`

  return fetch( url, {mode:'cors'}).then(response => response.json())
 }



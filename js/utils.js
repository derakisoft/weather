function getIcon(code) {
  return `https://openweathermap.org/img/wn/${code}@2x.png`;
}

function timeFormat(timestamp) {
  let date = new Date(timestamp * 1000)
  let hours = date.getHours()
  let minutes = date.getMinutes()
  return hours + ":" + minutes
}
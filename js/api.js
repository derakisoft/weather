const API_URL = 'https://api.openweathermap.org/data/2.5/'
const API_KEY = 'b6cc4392568a3586e950307c86a22bbd'

function request(query, callback) {
  fetch(API_URL + 'weather?appid=' + API_KEY + '&units=metric&q=' + query)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(_ => callback(null))
}
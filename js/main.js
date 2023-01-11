const queryField = document.querySelector("#query");
const submitButton = document.querySelector("#submit");
const errorMessage = document.querySelector("#message");
const resultContainer = document.querySelector("#result");

const ERROR_NOT_ENTERED = "Location not entered"
const ERROR_INCORRECT = "Incorrect location"

submitButton.onclick = function () {
  if (queryField.value === "") {
    errorMessage.innerText = ERROR_NOT_ENTERED
    resultContainer.style.display = "none"
  } else {
    request(queryField.value, function (data) {
      if (data == null) {
        errorMessage.innerText = ERROR_INCORRECT
        resultContainer.style.display = "none"
      } else {
        errorMessage.innerText = ""
        resultContainer.style.display = "block"

        let name = data['name']
        // let visibility = data['visibility']
        let weather = data['weather'][0]
        let main = data['main']
        // let wind = data['wind']
        // let clouds = data['clouds']['all']
        // let datetime = data['dt']
        let sys = data['sys']

        // TODO: show all details

        let elements = {
          location: name + ", " + sys['country'],
          temperature: main['temp'],
          feels_like: main['feels_like'],
          description: weather['main'] + ", " + weather['description'],
          maximum: main['temp_max'],
          minimum: main['temp_min'],
          sunrise: timeFormat(sys['sunrise']),
          sunset: timeFormat(sys['sunset']),
        }

        for (let key in elements) {
          document.getElementById(key).innerText = elements[key]
        }

        document.querySelector("#icon").setAttribute(
            "src", getIcon(weather['icon'])
        )
      }
    })
  }
}
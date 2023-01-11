const locationField = document.querySelector("#location");
const submitButton = document.querySelector("#submit");

submitButton.onclick = function () {
  if (locationField.value === "") {
    alert("No Location Entered")
  } else {
    alert(locationField.value)
  }
}
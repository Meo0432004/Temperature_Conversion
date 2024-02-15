const text = document.getElementById('myText');
const celsiusToFahrenheit = document.getElementById('celsiusToFahrenheit');
const fahrenheitToCelsius = document.getElementById('fahrenheitToCelsius');
const submit = document.getElementById('submit');
const result = document.getElementById('result');

submit.onclick = function () {
    if (celsiusToFahrenheit.checked) {
        result.textContent = ((text.value * 9 / 5) + 32).toFixed(1) + "°F";
    } else if (fahrenheitToCelsius.checked) {
        result.textContent = ((text.value - 32) * 5 / 9).toFixed(1) + "°C";
    } else {
        result.textContent = "Please select a conversion type";
    }
}
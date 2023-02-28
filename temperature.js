// Retrieve the HTML elements we need
const metricRadios = document.getElementsByName("metric");
const temperatureInput = document.getElementById("temperature");
const convertRadios = document.getElementsByName("convert");
const convertButton = document.getElementById("convert-button");
const resultElement = document.getElementById("result");

// Define the conversion functions
const celsiusFromFahrenheit = (temperature) => temperature * 1.8 + 32;
const celsiusFromKelvin = (temperature) => temperature - 273.15;
const fahrenheitFromCelsius = (temperature) => (temperature - 32) * (5 / 9);
const fahrenheitFromKelvin = (temperature) => (temperature * 9) / 5 - 459.67;
const kelvinFromCelsius = (temperature) => temperature + 273.15;
const kelvinFromFahrenheit = (temperature) => (temperature + 459.67) * (5 / 9);

// Define the conversion logic
const convertTemperature = () => {
    // Get the selected metric and convert values
    const metric = Array.from(metricRadios).find((r) => r.checked)?.value;
    const convert = Array.from(convertRadios).find((r) => r.checked)?.value;
    const temperature = parseFloat(temperatureInput.value);

    // Perform the conversion based on the selected metric and convert values
    let convertedTemperature;
    if (metric === "celsius" && convert === "fahrenheit") {
        convertedTemperature = celsiusFromFahrenheit(temperature);
    } else if (metric === "celsius" && convert === "kelvin") {
        convertedTemperature = kelvinFromCelsius(temperature);
    } else if (metric === "fahrenheit" && convert === "celsius") {
        convertedTemperature = fahrenheitFromCelsius(temperature);
    } else if (metric === "fahrenheit" && convert === "kelvin") {
        convertedTemperature = kelvinFromFahrenheit(temperature);
    } else if (metric === "kelvin" && convert === "celsius") {
        convertedTemperature = celsiusFromKelvin(temperature);
    } else if (metric === "kelvin" && convert === "fahrenheit") {
        convertedTemperature = fahrenheitFromKelvin(temperature);
    }

    if (convertedTemperature !== undefined) {
        const temperatureElement = document.querySelector(".temperature");
        const convertedTemperatureElement = document.querySelector(
            ".converted-temperature"
        );

        temperatureElement.textContent = `${temperature}º${metric.toUpperCase()} is `;
        convertedTemperatureElement.textContent = `${convertedTemperature.toFixed(
            2
        )}º${convert.toUpperCase()}.`;
    }
};

// Attach the conversion logic to the button click event
convertButton.addEventListener("click", convertTemperature);

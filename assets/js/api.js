const apiKey = ''; // Reemplaza con tu clave de API
const weatherForm = document.getElementById('weather-form');
const weatherResult = document.getElementById('weather-result');

weatherForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const city = document.getElementById('city').value;
  http://dataservice.accuweather.com/locations/v1/cities/autocomplete
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
    );
    if (!response.ok) {
      throw new Error('Ciudad no encontrada');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherResult.textContent = error.message;
  }
});

function displayWeather(data) {
  const { name, main, weather } = data;
  weatherResult.innerHTML = `
    <p><strong>${name}</strong>: ${main.temp} °C, ${weather[0].description}</p>
  `;
}

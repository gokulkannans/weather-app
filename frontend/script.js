function fetchWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    fetch(`/api/weather?city=${city}`)
        .then(response => {
            if (!response.ok) throw new Error("City not found");
            return response.json();
        })
        .then(data => {
            document.getElementById("result").classList.remove("hidden");
            document.getElementById("city-name").textContent = city;
            document.getElementById("weather-desc").textContent = data.weather[0].description;
            document.getElementById("temp").textContent = data.main.temp;
            document.getElementById("humidity").textContent = data.main.humidity;
        })
        .catch(error => {
            alert(error.message);
        });
}

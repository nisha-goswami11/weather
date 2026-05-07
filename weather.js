const apiKey = "331c7e5cadd872323bc0f38e9cab6eba";

async function getWeather() {

    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {

        const response = await fetch(apiURL);
        const data = await response.json();

        console.log(data);

        document.getElementById("temp").innerHTML =
            Math.round(data.main.temp) + "°C";

        document.getElementById("city-name").innerHTML =
            data.name;

        document.getElementById("humidity").innerHTML =
            data.main.humidity;

        document.getElementById("wind").innerHTML =
            data.wind.speed;

        const icon = data.weather[0].icon;

        document.getElementById("weather-icon").src =
            `https://openweathermap.org/img/wn/${icon}@2x.png`;

    }

    catch (error) {
        alert("City not found");
    }
}
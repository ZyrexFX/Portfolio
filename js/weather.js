let weather = {
    apikey: "0e0b50de658deac5a3ca806e9c5714a0",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey)
        .then((res) => res.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description, main } = data.weather[0];
        const { temp, humidity, feels_like } = data.main;
        const { country } = data.sys;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = name + `, ${country}`;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = `(${description})`;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " Km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.querySelector(".main-temp").innerText = main;
        document.querySelector(".feels-temp").innerText = `Feels Like: ${feels_like}°C`
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather('Indonesia');
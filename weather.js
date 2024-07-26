const apiKey = "6550ce4e4e06ecd9e9b75b583edde1d2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

if (response.status == 404) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
} else {

    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    let weatherCondn = data.weather[0].main;
    if (weatherCondn == "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (weatherCondn == "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (weatherCondn == "Clouds" ) {
        weatherIcon.src = "images/clouds.png";
    } else if (weatherCondn == "Drizzle") {        
        weatherIcon.src = "images/drizzle.png";
    } else if (weatherCondn == "Mist") {
        weatherIcon.src = "images/mist.png";
    } 

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}

searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value);
})
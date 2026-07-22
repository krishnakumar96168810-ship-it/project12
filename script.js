// // =====================================
// // Simple Weather App JavaScript
// // =====================================

// // Add your OpenWeatherMap API key
// const API_KEY = "4dc574ec31c58fb91f0f66526ca35676";


// // HTML Elements
// const cityInput = document.getElementById("cityInput");
// const searchBtn = document.getElementById("searchBtn");
// const locationBtn = document.getElementById("locationBtn");
// const themeBtn = document.getElementById("themeBtn");

// const cityName = document.getElementById("cityName");
// const temperature = document.getElementById("temperature");
// const description = document.getElementById("description");

// const weatherIcon = document.getElementById("weatherIcon");

// const feelsLike = document.getElementById("feelsLike");
// const humidity = document.getElementById("humidity");
// const wind = document.getElementById("wind");
// const pressure = document.getElementById("pressure");

// const sunrise = document.getElementById("sunrise");
// const sunset = document.getElementById("sunset");

// const loader = document.getElementById("loader");


// // ===============================
// // Weather by City
// // ===============================

// async function getWeather(city){

//     if(city === ""){
//         alert("Enter city name");
//         return;
//     }


//     loader.style.display = "block";


//     const url =
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;


//     try{

//         const response = await fetch(url);

//         if(!response.ok){
//             throw new Error("City not found");
//         }


//         const data = await response.json();


//         showWeather(data);


//     }
//     catch(error){

//         alert(error.message);

//     }


//     loader.style.display = "none";

// }



// // ===============================
// // Weather by Location
// // ===============================

// async function getLocationWeather(lat,lon){


//     loader.style.display = "block";


//     const url =
//     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;


//     try{


//         const response = await fetch(url);

//         const data = await response.json();


//         showWeather(data);


//     }
//     catch(error){

//         alert("Location weather error");

//     }


//     loader.style.display = "none";


// }



// // ===============================
// // Display Weather
// // ===============================

// function showWeather(data){


//     cityName.innerHTML =
//     `${data.name}, ${data.sys.country}`;


//     temperature.innerHTML =
//     `${Math.round(data.main.temp)}°C`;


//     description.innerHTML =
//     data.weather[0].description;



//     weatherIcon.src =
//     `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;



//     feelsLike.innerHTML =
//     `${Math.round(data.main.feels_like)}°C`;


//     humidity.innerHTML =
//     `${data.main.humidity}%`;


//     wind.innerHTML =
//     `${data.wind.speed} m/s`;


//     pressure.innerHTML =
//     `${data.main.pressure} hPa`;



//     let sunriseTime =
//     new Date(data.sys.sunrise * 1000);


//     let sunsetTime =
//     new Date(data.sys.sunset * 1000);



//     sunrise.innerHTML =
//     sunriseTime.toLocaleTimeString([],{
//         hour:"2-digit",
//         minute:"2-digit"
//     });



//     sunset.innerHTML =
//     sunsetTime.toLocaleTimeString([],{
//         hour:"2-digit",
//         minute:"2-digit"
//     });


// }



// // ===============================
// // Search Button
// // ===============================

// searchBtn.addEventListener("click",()=>{


//     let city = cityInput.value.trim();


//     getWeather(city);


// });



// // Enter key search

// cityInput.addEventListener("keypress",(e)=>{


//     if(e.key === "Enter"){

//         getWeather(cityInput.value.trim());

//     }


// });




// // ===============================
// // Current Location Button
// // ===============================

// locationBtn.addEventListener("click",()=>{


//     if(navigator.geolocation){


//         navigator.geolocation.getCurrentPosition(
            
//             (position)=>{


//                 getLocationWeather(
//                     position.coords.latitude,
//                     position.coords.longitude
//                 );


//             },


//             ()=>{

//                 alert("Location permission denied");

//             }

//         );


//     }
//     else{

//         alert("Geolocation not supported");

//     }


// });




// // ===============================
// // Dark Mode
// // ===============================

// themeBtn.addEventListener("click",()=>{


//     document.body.classList.toggle("dark");


// });



// // ===============================
// // Load Default City
// // ===============================

// window.onload = ()=>{

//     getWeather("London");

// };
// ===============================
// Weather App - Feature 1
// Search Weather by City
// ===============================

const API_KEY = "4dc574ec31c58fb91f0f66526ca35676";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");
const feelsLike = document.getElementById("feelsLike");
const weatherIcon = document.getElementById("weatherIcon");

async function getWeather(city){

    if(city===""){
        alert("Please enter a city name.");
        return;
    }

    const url =
 `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try{

        const response = await fetch(url);

        if(!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        cityName.textContent = data.name;

        temperature.textContent =
        Math.round(data.main.temp) + "°C";

        description.textContent =
        data.weather[0].description;

        humidity.textContent =
        data.main.humidity + "%";

        wind.textContent =
        data.wind.speed + " km/h";

        pressure.textContent =
        data.main.pressure + " hPa";

        feelsLike.textContent =
        Math.round(data.main.feels_like) + "°C";

        weatherIcon.src =
`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

    }

    catch(error){

        alert(error.message);

    }

}

// Search button

searchBtn.addEventListener("click",()=>{

    getWeather(cityInput.value.trim());

});

// Enter key

cityInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        getWeather(cityInput.value.trim());

    }

});
// =======================================
// Feature 2 - Current Location Weather
// =======================================

const locationBtn = document.getElementById("locationBtn");

// Get weather using latitude & longitude
async function getWeatherByLocation(lat, lon) {

    const url =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to fetch weather.");
        }

        const data = await response.json();

        cityName.textContent = `${data.name}, ${data.sys.country}`;

        temperature.textContent =
            Math.round(data.main.temp) + "°C";

        description.textContent =
            data.weather[0].description;

        humidity.textContent =
            data.main.humidity + "%";

        wind.textContent =
            (data.wind.speed * 3.6).toFixed(1) + " km/h";

        pressure.textContent =
            data.main.pressure + " hPa";

        feelsLike.textContent =
            Math.round(data.main.feels_like) + "°C";

        weatherIcon.src =
`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

        // Sunrise & Sunset
        const sunrise = new Date(data.sys.sunrise * 1000);
        const sunset = new Date(data.sys.sunset * 1000);

        document.getElementById("sunrise").textContent =
            sunrise.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            });

        document.getElementById("sunset").textContent =
            sunset.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            });

    } catch (error) {

        alert(error.message);

    }

}

// Location button
locationBtn.addEventListener("click", () => {

    if (!navigator.geolocation) {

        alert("Geolocation is not supported by your browser.");

        return;

    }

    locationBtn.disabled = true;

    navigator.geolocation.getCurrentPosition(

        (position) => {

            getWeatherByLocation(
                position.coords.latitude,
                position.coords.longitude
            );

            locationBtn.disabled = false;

        },

        (error) => {

            locationBtn.disabled = false;

            switch (error.code) {

                case error.PERMISSION_DENIED:
                    alert("Location permission denied.");
                    break;

                case error.POSITION_UNAVAILABLE:
                    alert("Location information is unavailable.");
                    break;

                case error.TIMEOUT:
                    alert("Location request timed out.");
                    break;

                default:
                    alert("Unable to get your location.");
            }

        }

    );

});
// =======================================
// Feature 3 - 5 Day Forecast
// =======================================

const forecastContainer = document.getElementById("forecast");

// Get 5-day forecast by city
async function getForecast(city) {

    const url =
`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Forecast not available.");
        }

        const data = await response.json();

        displayForecast(data.list);

    } catch (error) {

        console.error(error);

    }

}

// Get 5-day forecast by coordinates
async function getForecastByLocation(lat, lon) {

    const url =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Forecast not available.");
        }

        const data = await response.json();

        displayForecast(data.list);

    } catch (error) {

        console.error(error);

    }

}

// Display forecast cards
function displayForecast(list) {

    forecastContainer.innerHTML = "";

    // Pick one forecast around 12:00 PM each day
    const dailyForecast = list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    dailyForecast.forEach(item => {

        const date = new Date(item.dt * 1000);

        const day = date.toLocaleDateString("en-US", {
            weekday: "short"
        });

        const card = document.createElement("div");

        card.className = "forecast-card";

        card.innerHTML = `
            <h3>${day}</h3>

            <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">

            <p class="temp">${Math.round(item.main.temp)}°C</p>

            <p>${item.weather[0].description}</p>

            <p>💧 ${item.main.humidity}%</p>
        `;

        forecastContainer.appendChild(card);

    });

}
// =======================================
// Feature 4
// Dark Mode + Loader + Unit Toggle
// =======================================

const themeBtn = document.getElementById("themeBtn");
const loader = document.getElementById("loader");
const unitBtn = document.getElementById("unitBtn");

let currentUnit = "metric";

// ----------------------
// Loader
// ----------------------

function showLoader() {
    loader.style.display = "block";
}

function hideLoader() {
    loader.style.display = "none";
}

// ----------------------
// Dark Mode
// ----------------------

function enableDarkMode() {

    document.body.classList.add("dark");

    localStorage.setItem("theme", "dark");

    themeBtn.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

}

function disableDarkMode() {

    document.body.classList.remove("dark");

    localStorage.setItem("theme", "light");

    themeBtn.innerHTML =
    '<i class="fa-solid fa-moon"></i>';

}

themeBtn.onclick = () => {

    if(document.body.classList.contains("dark")){

        disableDarkMode();

    }else{

        enableDarkMode();

    }

};

if(localStorage.getItem("theme")==="dark"){

    enableDarkMode();

}

// ----------------------
// Save Last City
// ----------------------

function saveCity(city){

    localStorage.setItem("lastCity",city);

}

function loadLastCity(){

    const city=localStorage.getItem("lastCity");

    if(city){

        cityInput.value=city;

        getWeather(city);

    }

}

window.addEventListener("load",loadLastCity);

// ----------------------
// Temperature Toggle
// ----------------------

unitBtn.onclick=()=>{

    if(currentUnit==="metric"){

        currentUnit="imperial";

        unitBtn.textContent="°F";

    }else{

        currentUnit="metric";

        unitBtn.textContent="°C";

    }

    if(cityInput.value.trim()!==""){

        getWeather(cityInput.value);

    }

};
// =======================================
// Feature 5A - Auto Location
// =======================================

window.addEventListener("load", () => {

    if (localStorage.getItem("lastCity")) return;

    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(

        (position) => {

            getWeatherByLocation(
                position.coords.latitude,
                position.coords.longitude
            );

            getForecastByLocation(
                position.coords.latitude,
                position.coords.longitude
            );

        },

        () => {

            console.log("Location permission not granted.");

        }

    );

});
function updateBackground(weather){

    const bg=document.querySelector(".background");

    const type=weather.toLowerCase();

    if(type.includes("clear")){

        bg.style.background=
        "linear-gradient(-45deg,#4facfe,#00f2fe,#87CEEB,#2193b0)";

    }

    else if(type.includes("cloud")){

        bg.style.background=
        "linear-gradient(-45deg,#757F9A,#D7DDE8,#6C7A89,#BDC3C7)";

    }

    else if(type.includes("rain")){

        bg.style.background=
        "linear-gradient(-45deg,#141E30,#243B55,#4B79A1,#283E51)";

    }

    else if(type.includes("snow")){

        bg.style.background=
        "linear-gradient(-45deg,#E6DADA,#274046,#ffffff,#dfe9f3)";

    }

    else if(type.includes("thunder")){

        bg.style.background=
        "linear-gradient(-45deg,#232526,#414345,#0F2027,#2C5364)";

    }

    else{

        bg.style.background=
        "linear-gradient(-45deg,#2563eb,#0ea5e9,#6366f1,#1e293b)";

    }

}
const favoriteCities=[];

function addFavorite(city){

    if(!favoriteCities.includes(city)){

        favoriteCities.push(city);

        console.log("Favorites:",favoriteCities);

    }

}
let weather = {
    apiKey : "e84218af7c3e6ca70309d48ea060952e",
    fetchWeather: function (city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0]; 
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp) + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%" ;
        document.querySelector(".wind").innerText = "Wind speed: " + Math.round(speed) + " km/h" ;
        document.querySelector(".weather").classList.remove("loading");
          
        document.body.style.backgroundImage = "url('https://source.unsplash.com/2000x1000/?" + name +"')"
    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}; 

document
   .querySelector(".search button")
   .addEventListener("click", function () {
        weather.search();
});

document
    .querySelector(".search-bar")
    .addEventListener( "keyup", function (event) { 
    if (event.key == "Enter") {
            weather.search();
    }
});


//Function to get users location
window.onload = getLocation();

function getLocation() {
  if (navigator.geolocation) {navigator.geolocation.getCurrentPosition(showPosition);} 
    else { console.log("Geolocation is not supported by this browser.");}
}

//function to use push user push user location into Location iq api and return city name
function showPosition(position) {
    fetch("https://locationiq.com/v1/reverse.php?key=pk.254adf22cf581c7ae167f824a2ca1618&lat=" 
    +position.coords.latitude+"&lon=" +position.coords.longitude +"&format=json")
    .then(response => response.json())
    .then(data =>{ 
        weather.fetchWeather(data.address.city);
    })


};



module.exports = search 
module.exports = weather 
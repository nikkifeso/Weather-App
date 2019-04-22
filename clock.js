const apiKey = 'a4ad750391482adc3a14e9858548191e';
const timeKey ='iC2XDSjHwMgGRsEYGApjYSqYHacCWU';
const city = document.getElementById('searchText');
const searchBtn =document.getElementById('searchBtn');
const searchText = document.getElementById('searchText');
const time = document.getElementsByClassName('time');
const weather = document.getElementsByClassName('weather');


//enters city
searchText.addEventListener('keyup', enterKey);
//finds weather
searchBtn.addEventListener('click',findWeather);
//finds time
searchBtn.addeventListener('click', findTime);

function enterKey(e){
    if (e.key === "Enter"){
        findWeather();
        findTime();
    }
}

function findWeather(){
    if (searchText.value === ''){
        alert('Enter a city');
    } else {
       var searchLink = "api.openweathermap.org/data/2.5/weather?q=" + searchText.value + "&appid=" + apiKey;
       httpRequestAsync(searchLink, weatherResponse);

    }
function weatherResponse(response){
    let jsonObject = JSON.parse.response;
    location.innerHTML = jsonObject.name;
    weather.innerHTML = parseInt(jsonObject.main.temp -273) +"°";
}

    
}

function findTime(){
    var timelink = "https://www.amdoren.com/api/timezone.js?" + searchText.value + "&timeid=" + timeKey;
    
}
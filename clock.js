const apiKey = 'a4ad750391482adc3a14e9858548191e';
const timeKey ='iC2XDSjHwMgGRsEYGApjYSqYHacCWU';
let city = document.getElementById('searchText');
let searchBtn =document.getElementById('searchBtn');
let searchText = document.getElementById('searchText');



//enters city
// searchText.addEventListener('keypress',findWeather, enterKey);
searchText.addEventListener('keypress', function(e) {
    findTime();
    findWeather();  
    return enterKey(event);
});

searchBtn.addEventListener('click', function(e) {
    //findTime();
    findWeather();  
    return searchButton(event);
});

// //finds weather
// searchBtn.addEventListener('click', findWeather, searchButton);
// //finds time
// // searchBtn.addeventListener('click', findTime);

function enterKey(event){
    if (event.keyCode === 13){
        event.preventDefault();
    }
}

function searchButton(event){
    if (event.button === 0){
        event.preventDefault();
    }
}

function findWeather(){
    if (searchText.value === ''){
        alert('Enter a city');
    } else {
       var searchLink = "http://api.openweathermap.org/data/2.5/weather?q=" + searchText.value + "&appid=" + apiKey;
       //httpRequestAsync(searchLink, weatherResponse);
       weatherResponse(httpGet(searchLink));
    }
}

function weatherResponse(response){
    //console.log(response);
    let jsonObject = JSON.parse(response);
    locationTimezone.innerHTML = jsonObject.name;
    //console.log(locationTimezone);
    farenheit.innerHTML = parseInt(jsonObject.main.temp) + "°F";
    weather.innerHTML = parseInt(jsonObject.main.temp -273) + "°C";
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function findTime(){
    var timeLink = "https://www.amdoren.com/api/timezone.php?api_key=iC2XDSjHwMgGRsEYGApjYSqYHacCWU&loc="+searchText.value;
   console.log(timeLink);
    timeResponse(timeHttpGet(timeLink));
}

function timeResponse(response){
    let jsonObjectTime = JSON.parse(response);
    locationTime.innerHTML = jsonObjectTime.time;
}

function timeHttpGet(url){
    var timeXmlHttp = new XMLHttpRequest();
    timeXmlHttp.open("GET", url, true);
    timeXmlHttp.send(null);
    return timeXmlHttp.responseText;

}
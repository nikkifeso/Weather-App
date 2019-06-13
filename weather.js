const apiKey = 'a4ad750391482adc3a14e9858548191e';
const timeKey ='iC2XDSjHwMgGRsEYGApjYSqYHacCWU';
let city = document.getElementById('searchText');
let searchBtn = document.getElementById('searchBtn');
let searchText = document.getElementById('searchText');

searchText.addEventListener('keypress', function(e) {
    if (event.keyCode === 13){
        event.preventDefault();
        findWeather();  
    }
});

searchBtn.addEventListener('submit', function(e) {
    if (event.keyCode === 0){
        event.preventDefault();
        findWeather();  
        console.log("Praise Jesus!")
    }
});


// function enterKey(event){
//     if (event.keyCode === 13){
//         event.preventDefault();
//     }
// }

// function searchButton(event){
//     if (event.button === 0){
//         event.preventDefault();
//     }
// }

function findWeather(){
    if (! searchText.value){
        alert('Enter a city');
        return;
    } 
       var searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchText.value + "&appid=" + apiKey;
       //console.log(searchLink);
       weatherResponse(httpGet(searchLink));
    }


function weatherResponse(response){
    //console.log(response);
    let jsonObject = JSON.parse(response);
    locationTimezone.innerHTML = jsonObject.name + " | "+ jsonObject.sys.country;
    //console.log(locationTimezone);
    farenheit.innerHTML = parseInt(jsonObject.main.temp) + "°F";
    celsius.innerHTML = parseInt(jsonObject.main.temp -273) + "°C";
    image.src = "https://openweathermap.org/img/w/"+jsonObject.weather[0].icon+".png";
    var desc = jsonObject.weather[0].description;
    description.innerHTML = desc.toUpperCase();


   
}

function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
// function findTime(){
//     var timeLink = "https://www.amdoren.com/api/timezone.php?api_key=iC2XDSjHwMgGRsEYGApjYSqYHacCWU&loc="+searchText.value;
//     timeResponse(timeHttpGet(timeLink));
// }

// function timeResponse(response){
//     let jsonObjectTime = JSON.parse(response);
//     locationTime.innerHTML = jsonObjectTime.time;
// }

// function timeHttpGet(url){
//     var timeXmlHttp = new XMLHttpRequest();
//     timeXmlHttp.open("GET", url, true);
//     timexmlHttp.withCredentials = true;
//     timeXmlHttp.send(null);
//     console.log(timeXmlHttp);
//     return timeXmlHttp.responseText;

// }
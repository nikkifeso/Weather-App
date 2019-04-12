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

    }
    
}

function findTime(){
    
}
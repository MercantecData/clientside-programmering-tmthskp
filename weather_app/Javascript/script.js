//OpenWeather Script
//var url ="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}"

//Forsøg med by navn Viborg
function openWeatherScriptViborg()
{
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Viborg&appid=8d25bcbc04528882c5fbe036421e9aeb"

  var promise = fetch(url)
  var promise2 = promise.then(data=>data.text())
  promise2.then(data=>document.getElementById("city_viborg_fetch").innerHTML=data)
}


//Forsøg  med by navn thisted
function openWeatherScriptThisted()
{
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Thisted&appid=8d25bcbc04528882c5fbe036421e9aeb"

  var promise = fetch(url)
  var promise2 = promise.then(data=>data.text())
  promise2.then(data=>document.getElementById("city_thisted_fetch").innerHTML=data)
}

//Forsøg med Kordinator
function openWeatherMapCords()
{
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=56.57&lon=9.03&appid=8d25bcbc04528882c5fbe036421e9aeb"
    
    var promise = fetch(url)
    var promise2 = promise.then(data=>data.text())
    promise2.then(data=>document.getElementById("cord_fetch_skive").innerHTML=data)
}

//Forsøg med formular input specifik data
function openWeatherMapScriptCityNameInput()
{
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+document.getElementById("city_name").value+"&appid=8d25bcbc04528882c5fbe036421e9aeb"
    
    fetch(url)
    .then(data=>data.json())
    .then(SendDatatoPage)   
}

function SendDatatoPage(data)
{
    document.getElementById("land").innerHTML = `Land ${data.sys.country}`
    document.getElementById("by_navn").innerHTML = `Vejret i ${data.name}`
    document.getElementById("vind_styrke").innerHTML = `Vind styrke ${data.wind.speed}`
    
    document.getElementById("temperatur").innerHTML = `Temperatur ${Math.floor(data.main.temp) - 272}° grader i celcius`
    //document.getElementById("temperatur").innerHTML = `Temperatur ${data.main.temp}° grader i Kelvin`
}



//Forsøg med Onecall
function openWeatherMapOneCall()
{
    var url = "https://api.openweathermap.org/data/2.5/onecall?lat=56.45&lon=9.4&exclude=daily,minutely,hourly&appid=8d25bcbc04528882c5fbe036421e9aeb"
    
    var promise = fetch(url)
    var promise2 = promise.then(data=>data.text())
    promise2.then(data=>document.getElementById("cord_fetch_one_call").innerHTML=data)
}


/*** Ikke brugt ***/
/*
//Forsøg med formular input alt data 
function openWeatherMapScriptCityNameInput_1()
{
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+document.getElementById("city_name_1").value+"&appid=8d25bcbc04528882c5fbe036421e9aeb"
   
    var promise = fetch(url)
    var promise2 = promise.then(data=>data.text())
    promise2.then(data=>document.getElementById("city_name_fetch_input").innerHTML=data)  
}
*/

/*
//Dette er en statisk måde at få data ud på site. Vil prøve at få det til at virke med formular
var url = "https://api.openweathermap.org/data/2.5/weather?q=Viborg&appid=8d25bcbc04528882c5fbe036421e9aeb"

fetch(url)
.then(data=>data.json())
.then(SendDatatoPage)

function SendDatatoPage(data)
{
    document.getElementById("land").innerHTML = `Land ${data.sys.country}`
    document.getElementById("by_navn").innerHTML = `Vejret i ${data.name}`
    document.getElementById("temperatur").innerHTML = `Temperatur ${Math.floor(data.main.temp) - 273,15}° grader`//Math.floor() fjerner komma tal
}
*/

/*
//Forsøg med formular input specifik data
function openWeatherMapScriptCityNameInput_1()
{
    var url_1 = "https://api.openweathermap.org/data/2.5/weather?q="+document.getElementById("city_name_1").value+"&appid=8d25bcbc04528882c5fbe036421e9aeb"
    
    fetch(url_1)
    .then(data_1=>data_1.json())
    .then(SendDatatoPage_1)   
}

function SendDatatoPage_1(data)
{
    document.getElementById("land_1").innerHTML = `Land ${data.sys.country}`
    document.getElementById("by_navn_1").innerHTML = `Vejret i ${data.name}`
    document.getElementById("temperatur_1").innerHTML = `Temperatur ${data.main.temp}° grader i Kelvin`
    //document.getElementById("vejr_situation_1").innerHTML = `Vejr situation ${data.weather.main}`   
}
*/

    

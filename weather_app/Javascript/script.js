//OpenWeather Script city name Viborg

//Dette er en statisk måde at få data ud på site. Vil prøve at få det til at virke med formular
//var url ="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}"
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

//Forsøg med by navn Viborg
function openWeatherMapScript()
{
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Viborg&appid=8d25bcbc04528882c5fbe036421e9aeb"

  var promise = fetch(url)
  var promise2 = promise.then(data=>data.text())
  promise2.then(data=>{document.getElementById("city_name_fetch").innerHTML=data;})
}

//Openweather Script kald city name Viborg
openWeatherMapScript();

//Forsøg  med by navn thisted
function openWeatherMapScriptThisted()
{
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Thisted&appid=8d25bcbc04528882c5fbe036421e9aeb"

  var promise = fetch(url)
  var promise2 = promise.then(data=>data.text())
  promise2.then(data=>{document.getElementById("city_name_fetch_thisted").innerHTML=data;})
}

//Forsøg med Kordinator
function openWeatherMapCords()
{
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=56.45&lon=9.4&appid=8d25bcbc04528882c5fbe036421e9aeb"
    
    var promise = fetch(url)
    var promise2 = promise.then(data=>data.text())
    promise2.then(data=>{document.getElementById("cord_fetch").innerHTML=data;})
}

//Forsøg med Onecall
function openWeatherMapOneCall()
{
    var url = "https://api.openweathermap.org/data/2.5/onecall?lat=56.45&lon=9.4&exclude=daily,minutely,hourly&appid=8d25bcbc04528882c5fbe036421e9aeb"
    
    var promise = fetch(url)
    var promise2 = promise.then(data=>data.text())
    promise2.then(data=>{document.getElementById("cord_fetch_one_call").innerHTML=data;})
}

//Forsøg med formular input specifik data
function openWeatherMapScriptCityNameInput()
{
    var url_1 = "https://api.openweathermap.org/data/2.5/weather?q="+document.getElementById("city_name").value+"&appid=8d25bcbc04528882c5fbe036421e9aeb"
    
    fetch(url_1)
    .then(data=>data.json())
    .then(SendDatatoPage_1)   
}

function SendDatatoPage_1(data)
{
    document.getElementById("land_1").innerHTML = `Land ${data.sys.country}`
    document.getElementById("by_navn_1").innerHTML = `Vejret i ${data.name}`
    document.getElementById("temperatur_1").innerHTML = `Temperatur ${Math.floor(data.main.temp) - 273,15}° grader i Kelvin`
}

//Forsøg med formular input alt data
function openWeatherMapScriptCityNameInput_1()
{
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+document.getElementById("city_name_1").value+"&appid=8d25bcbc04528882c5fbe036421e9aeb"
   
    var promise = fetch(url)
    var promise2 = promise.then(data=>data.text())
    promise2.then(data=>document.getElementById("city_name_fetch_input").innerHTML=data)  
}


    

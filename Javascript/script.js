//OpenWeather Script city name Viborg
function openWeatherMapScript()
{

  //var url ="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}"
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Viborg&appid=8d25bcbc04528882c5fbe036421e9aeb"

  var promise = fetch(url)
  var promise2 = promise.then(data=>data.text())
  promise2.then(data=>{document.getElementById("city_name_fetch").innerHTML=data;})
}

//Openweather Script kald city name Viborg
openWeatherMapScript();

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


//Forsøg med formular input
function openWeatherMapScriptCityNameInput()
{
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+document.getElementById("city_name").value+"&appid=8d25bcbc04528882c5fbe036421e9aeb"

    var promise = fetch(url)
    var promise2 = promise.then(data=>data.text())
    promise2.then(data=>document.getElementById("city_name_fetch_input").innerHTML=data)
    
}

//Forsøg med formular input vis udvalgte data
function openWeatherMapScriptCityNameInputChoose()
{
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+document.getElementById("city_name_1").value+"&appid=8d25bcbc04528882c5fbe036421e9aeb"

    var promise = fetch(url)
    var promise2 = promise.then(data=>data.text())
    promise2.then(data=>document.getElementById("city_name_fetch_input_1").innerHTML = data.main.temp)
    
}

//Dette er en statisk måde at få data ud på site. Vil prøve at få det til at virke med formular
var url = "https://api.openweathermap.org/data/2.5/weather?q=Viborg&appid=8d25bcbc04528882c5fbe036421e9aeb"
var result

fetch(url)
.then(data=>data.json())
.then(UpdatetoPage)

function UpdatetoPage(data)
{
    document.getElementById("content").innerHTML = `Vejret i ${data.name}`
    document.getElementById("temperatur").innerHTML = `${data.main.temp} grader`
}

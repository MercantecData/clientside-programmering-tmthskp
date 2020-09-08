//OpenWeather Script


//Formular input specifik data fra openmap
function openWeatherMapScriptCityNameInput()
{
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+document.getElementById("city_name").value+"&appid=8d25bcbc04528882c5fbe036421e9aeb"
    //var iconurl = "http://openweathermap.org/img/wn/10d@2x.png"
    fetch(url)
    .then(data=>data.json())
    .then(SendDatatoPage)  
    
}



function SendDatatoPage(data)
{
    var {icon} = data.weather[0];

    document.getElementById("land").innerHTML = `Land ${data.sys.country}`
    document.getElementById("by_navn").innerHTML = `${data.name}`
    document.getElementById("vind_styrke").innerHTML = `${data.wind.speed}`  
    document.getElementById("temperatur").innerHTML = `${Math.floor(data.main.temp) - 272}°` 
    document.getElementById("icons").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" style="width: 150px"/>`
    
}
 
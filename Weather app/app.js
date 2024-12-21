const apikey = ""
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let cityname = document.querySelector(".city")
let temperature= document.querySelector(".temp")
let humidity= document.querySelector(".humidity")
let wind=document.querySelector(".wind")
let searchinput=document.querySelector(".search input")
let searchbtn=document.querySelector(".search")
let weathericon= document.querySelector(".weathericon")
let weatherbox=document.querySelector(".weather")

async function checkweather(city) {
    const response = await fetch(apiurl + city+ `&appid=${apikey}`)
    var data = await response.json();
    console.log(data);
    cityname.innerHTML = data.name
    temperature.innerHTML=Math.round(data.main.temp) +"°c"
    humidity.innerHTML=data.main.humidity + "%"
    wind.innerHTML=data.wind.speed + " km/hr"
    if(data.weather[0].main==="Drizzle"){
        weathericon.src="drizzle.png"
    }
    else if(data.weather[0].main==="Clouds"){
        weathericon.src="clouds.png"
    }
    else if(data.weather[0].main==="Clear"){
        weathericon.src="clear.png"
    }
    else if(data.weather[0].main==="Mist"){
        weathericon.src="mist.png"
    }
    weatherbox.style.display="block"
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchinput.value)
})


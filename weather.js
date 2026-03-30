const apikey="0d1614b55331d364b5d945af6b6ecb85";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weathericon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response= await fetch(apiurl+city+`&appid=${apikey}`);

if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
}
else{

    const data=await response.json();
    console.log(data)

    document.querySelector(".city").innerHTML=data.name
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"℃"
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%"
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h"

    if (data.weather[0].main=="Clouds"){
        weathericon.src="../image/clouds.png";
    }
    else if (data.weather[0].main=="Clear"){
        weathericon.src="../image/clear.png";
    }
    else if (data.weather[0].main=="Mist"){
        weathericon.src="../image/mist.png";
    }
    else if (data.weather[0].main=="Rain"){
        weathericon.src="../image/rain.png";
    }
    else if (data.weather[0].main=="Snow"){
        weathericon.src="../image/snow.png";
    }
    else if (data.weather[0].main=="Drizzle"){
        weathericon.src="../image/drizzle.png";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}



}
searchbtn.addEventListener("click",()=>{
        checkWeather(searchbox.value)
})

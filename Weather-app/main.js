const button = document.getElementById('getWeather');
const input = document.getElementById('cityName');
const city_name = document.getElementById('name');
const feels_like = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const temp = document.getElementById('temperature');
const temp_max = document.getElementById('temp_max');
const temp_min = document.getElementById('temp_min');
const description = document.getElementById('description');
const wind = document.getElementById('wind')
const location_not_found=document.querySelector(".location_not_found")
const weather_info= document.querySelector(".weather-info")
const enter_city= document.querySelector(".enter-city")
const images= document.querySelector(".images")
const weather_img = document.querySelector(".weather-image")

        location_not_found.style.display="none";
		enter_city.style.display="flex";
		weather_info.style.display="none";
        images.style.display="none";
async function checkWeather(city){
	const api_key = "119ce1181cf54430f8b774217c25606c"   //api key for openweathermap
	
	const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
	
	const weather_data =  await fetch( `${url}`).then(response => response.json());
	
	if(weather_data.cod === '404'){
		location_not_found.style.display="block";
		enter_city.style.display="none";
		weather_info.style.display="none";
		return;
	}
	    location_not_found.style.display="none";
		enter_city.style.display="none";
		weather_info.style.display="block";
	
	feels_like.innerHTML = `${Math.round(weather_data.main.feels_like - 273.15)}°` 
    humidity.innerHTML = `${weather_data.main.humidity}%` 
    pressure.innerHTML = `${weather_data.main.pressure}mb` 
    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°` 
    temp_max.innerHTML = `${Math.round(weather_data.main.temp_max - 273.15)}°` 
    temp_min.innerHTML = `${Math.round(weather_data.main.temp_min - 273.15)}°`
	city_name.innerHTML=`${weather_data.name}`
	description.innerHTML = `${weather_data.weather[0].description}`
	wind.innerHTML = `${weather_data.wind.speed}km/h`
	
    switch(weather_data.weather[0].main){
		case 'Clear':
		    weather_img.src= "/Weather-app/images/clear.png";
			images.style.display="block";
		break;
		case 'Clouds':
			weather_img.src = "/Weather-app/images/clouds.png";
			images.style.display="block";
		break;
		case 'Drizzle':
			weather_img.src="/Weather-app/images/drizzle.png";
			images.style.display="block";
		break;
		case 'Mist':
			weather_img.src="/Weather-app/images/mist.png";
			images.style.display="block";
		break;
		case 'rain':
			weather_img.src="/Weather-app/images/rain.png";
			images.style.display="block";
		break;
		case 'Snow':
			weather_img.src="/Weather-app/images/snow.png";
			images.style.display="block";
		break;

	}
}

button.addEventListener('click',()=>{
	 checkWeather(input.value);

});

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '04b04e4aa3msh88cee251d6baa65p1f88a2jsn4fd0ce9d13a7',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

function runafunc(event){
    console.log("Hello");
    event.preventDefault();
    getWeather("Delhi");
   
    
    
}

const getWeather = (city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {
        cityName.innerHTML=city
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        // submit.innerHTML=6
        // cityName.innerHTML=5;
    })
    .catch(err => console.error(err));
}

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+'Mumbai', options)
        .then(response => response.json())
        .then((response) => {
            
            console.log(response)
            cloud_pct5.innerHTML = response.cloud_pct
            temp5.innerHTML = response.temp
            // temp2.innerHTML = response.temp
            feels_like5.innerHTML = response.feels_like
            humidity5.innerHTML = response.humidity
            // humidity2.innerHTML = response.humidity
            min_temp5.innerHTML = response.min_temp
            max_temp5.innerHTML = response.max_temp
            wind_speed5.innerHTML = response.wind_speed
            // wind_speed2.innerHTML = response.wind_speed
            wind_degrees5.innerHTML = response.wind_degrees
            sunrise5.innerHTML = response.sunrise
            sunset5.innerHTML = response.sunset
            // submit.innerHTML=6
            // cityName.innerHTML=5;
        })
        .catch(err => console.error(err));
    
    
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+'Chennai', options)
        .then(response => response.json())
        .then((response) => {
            
            console.log(response)
            cloud_pct6.innerHTML = response.cloud_pct
            temp6.innerHTML = response.temp
            // temp2.innerHTML = response.temp
            feels_like6.innerHTML = response.feels_like
            humidity6.innerHTML = response.humidity
            // humidity2.innerHTML = response.humidity
            min_temp6.innerHTML = response.min_temp
            max_temp6.innerHTML = response.max_temp
            wind_speed6.innerHTML = response.wind_speed
            // wind_speed2.innerHTML = response.wind_speed
            wind_degrees6.innerHTML = response.wind_degrees
            sunrise6.innerHTML = response.sunrise
            sunset6.innerHTML = response.sunset
            // submit.innerHTML=6
            // cityName.innerHTML=5;
        })
        .catch(err => console.error(err));
        
        
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+'Lucknow', options)
        .then(response => response.json())
        .then((response) => {
            
            console.log(response)
            cloud_pct7.innerHTML = response.cloud_pct
            temp7.innerHTML = response.temp
            // temp2.innerHTML = response.temp
            feels_like7.innerHTML = response.feels_like
            humidity7.innerHTML = response.humidity
            // humidity2.innerHTML = response.humidity
            min_temp7.innerHTML = response.min_temp
            max_temp7.innerHTML = response.max_temp
            wind_speed7.innerHTML = response.wind_speed
            // wind_speed2.innerHTML = response.wind_speed
            wind_degrees7.innerHTML = response.wind_degrees
            sunrise7.innerHTML = response.sunrise
            sunset7.innerHTML = response.sunset
            // submit.innerHTML=6
            // cityName.innerHTML=5;
        })
        .catch(err => console.error(err));
        
        
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+'Kolkata', options)
        .then(response => response.json())
        .then((response) => {
            
            console.log(response)
            cloud_pct8.innerHTML = response.cloud_pct
            temp8.innerHTML = response.temp
            // temp2.innerHTML = response.temp
            feels_like8.innerHTML = response.feels_like
            humidity8.innerHTML = response.humidity
            // humidity2.innerHTML = response.humidity
            min_temp8.innerHTML = response.min_temp
            max_temp8.innerHTML = response.max_temp
            wind_speed8.innerHTML = response.wind_speed
            // wind_speed2.innerHTML = response.wind_speed
            wind_degrees8.innerHTML = response.wind_degrees
            sunrise8.innerHTML = response.sunrise
            sunset8.innerHTML = response.sunset
            // submit.innerHTML=6
            // cityName.innerHTML=5;
        })
        .catch(err => console.error(err));


const sub=document.getElementById('submit');
sub.addEventListener("click",(e)=>{
    e.preventDefault()
    // if(place.value=="") alert("Please Enter Your City!!!");
     getWeather(place.value);
})

getWeather("Delhi");











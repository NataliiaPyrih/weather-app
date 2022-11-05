let apiKey = "b400ae3b711a616262d18b0ca2cbe78f";
let units = "metric";
let Inputcity=document.querySelector("#city-input");
let city;
let apiUrl;

city=document.querySelector("#city-input");
   
   if(Inputcity===null){
    city="Kharkiv";
}
else{
    city=`${Inputcity.value}`;
}

apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;


function displayWeather(response){
    console.log(response.data);
    let tempEl=Math.round(response.data.main.temp);
    let humidity=response.data.main.humidity;
   let windSpeed=response.data.wind.speed;
    let description=response.data.weather[0].main;
    
    let temp=document.querySelector("#temp");
    temp.innerHTML=tempEl;
    
    let hum=document.querySelector("#hum");
    hum.innerHTML=`${humidity} %`;

    let windSpEl=document.querySelector("#windSp");
    windSpEl.innerHTML=`${windSpeed} m/s`;

    let DescrImg ={
        "Clouds":
        {   desc:"Clouds",
            icon:"☁"
        },

        "Clear":
        {   desc:"Clear",
            icon:"☀" 
        },

        "Thunderstorm":

        {   desc:"Thunderstorm",
            icon:"🌪"

        },

        "Rain":{
            desc:"Rain",
            icon:"🌨"
        }
    };
    if(DescrImg[description]===undefined){

    }
    else{
        let currentDesc=document.querySelector("#descr");
        currentDesc.innerHTML=`${DescrImg[description].desc}`;
        let currDescImg=document.querySelector("#currImg");
        currDescImg.innerHTML=`${DescrImg[description].icon}`;
    }
}

axios.get(apiUrl).then(displayWeather);
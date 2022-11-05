let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },

  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};


let city= prompt("Enter a city?");
let city1;


function FindCity(){
  if(city!=""){
      city1=city.toLowerCase().trim();
  }
    else{
        alert("You haven't entered a city(");
    }
}


function getForecast(){
if(weather[city1]===undefined){
    alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+ ${city}`);}

  else{
  let roundTemp = Math.round(weather[city1].temp);
  let tempF= roundTemp*9/5 +32;
  tempF=Math.round(tempF);
  alert(`It is currently ${roundTemp} ( ${tempF} °F) in ${city} with a humidity of ${weather[city1].humidity} %`);
  }
}
FindCity();
getForecast();

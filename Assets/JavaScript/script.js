//Dependencies
var searchArea=document.querySelector("#search-area");
var searchBtn=document.querySelector('#search-btn');
var temp=document.querySelector('#temp');
var wind=document.querySelector('#wind');
var humidity=document.querySelector('#humidity')
var displayCity=document.querySelector("#display-city")
var APIKey = "3ceee4a866c36aa0df2373e3c69834c3";
var data;
var city;

 
// Get info from openweather Api
function getWeather(cityname) {

  var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&appid=" + APIKey+"&units=imperial";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayCity.textContent=city;
      temp.textContent="Temp:" + data.list[0].main.temp;
      wind.textContent="wind:" + data.list[0].wind.speed;
      humidity.textContent="Humdity:" + data.list[0].main.humidity;
      
      console.log(data.list[0].main.humidity)
      console.log(data.list[0].wind.speed)
      console.log(data.list[0].main.temp)
      
      
      
    })
    
   


}


// User input
function search(event){
  event.preventDefault();
  console.log(searchArea.value);
  city=searchArea.value;
  
  getWeather(city);
  
}
 searchBtn.addEventListener("click",search);
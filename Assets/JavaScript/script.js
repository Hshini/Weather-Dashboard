//Dependencies
var searchArea=document.querySelector("#search-area")
var searchBtn=document.querySelector('#search-btn');

var city;
var APIKey = "3ceee4a866c36aa0df2373e3c69834c3";
var requestUrl;

function getWeather(cityname) {

  requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&appid=" + APIKey+"&units=imperial";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      console.log(data.list[0].wind.speed)
      console.log(data.list[0].main.temp)
    })


}


    function search(event){
      event.preventDefault()
      console.log("hello")
      console.log(searchArea.value);
      city=searchArea.value;
      getWeather(searchArea.value)

      }
    searchBtn.addEventListener("click",search);
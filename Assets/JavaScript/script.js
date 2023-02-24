//Dependencies
var searchArea=document.querySelector("#search-area");
var searchBtn=document.querySelector('#search-btn');
var temp=document.querySelector('#temp');
var wind=document.querySelector('#wind');
var humidity=document.querySelector('#humidity')
var displayCity=document.querySelector("#display-city")
var APIKey = "3ceee4a866c36aa0df2373e3c69834c3";
var recentSearch=document.querySelector("#recentList");

var firstDay=document.querySelector("#firstDay")
var secondDay=document.querySelector("#secondDay")
var thirdDay=document.querySelector("#thirdDay")
var fourthDay=document.querySelector("#fourthDay")
var fifthDay=document.querySelector("#fifthDay")

var day1Tem=document.getElementById("temp-day1")
var day1wind=document.getElementById("wind-day1")
var day1humidity=document.getElementById("humidity-day1")

var day2Tem=document.getElementById("temp-day2")
var day2wind=document.getElementById("wind-day2")
var day2humidity=document.getElementById("humidity-day2")

var day3Tem=document.getElementById("temp-day3")
var day3wind=document.getElementById("wind-day3")
var day3humidity=document.getElementById("humidity-day3")

var day4Tem=document.getElementById("temp-day4")
var day4wind=document.getElementById("wind-day4")
var day4humidity=document.getElementById("humidity-day4")

var day5Tem=document.getElementById("temp-day5")
var day5wind=document.getElementById("wind-day5")
var day5humidity=document.getElementById("humidity-day5")
var city;

// Get info from openweather Api
function getWeather(cityname) {

  var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&appid=" + APIKey+"&units=imperial";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      // // for(var i = 1; i < data.list.length; i+=8){
      // //   console.log(i)
      // //  console.log( data.list[i].dt_txt);
      // //  var cardEl = document.createElement("card");
      // //  cardEl.classList.add("day")
      // //  var dateEl = document.createElement("h5")
      // //  dateEl.textContent = data.list[i].dt_txt;
      // //  cardEl.appendChild(dateEl)

      // //   document.getElementById("forcastList").appendChild(cardEl)
      // }

      displayCity.textContent=city
      temp.textContent="Temp:" + data.list[0].main.temp;
      wind.textContent="Wind:" + data.list[0].wind.speed;
      humidity.textContent="Humdity:" + data.list[0].main.humidity;

      //Day 1 forecast
      firstDay.textContent=data.list[0].dt_txt
      day1Tem.textContent="Temp:" + data.list[0].main.temp;
      day1wind.textContent="Wind:" + data.list[0].wind.speed;
      day1humidity.textContent="Humdity:" + data.list[0].main.humidity;

      //Day 2 forecast
      
      secondDay.textContent=data.list[8].dt_txt
      day2Tem.textContent="Temp:" + data.list[8].main.temp;
      day2wind.textContent="Wind:" + data.list[8].wind.speed;
      day2humidity.textContent="Humdity:" + data.list[8].main.humidity;

      //Day 3 forecast
      thirdDay.textContent=data.list[16].dt_txt
      day3Tem.textContent="Temp:" + data.list[16].main.temp;
      day3wind.textContent="Wind:" + data.list[16].wind.speed;
      day3humidity.textContent="Humdity:" + data.list[16].main.humidity;

      //Day 4 forecast
      fourthDay.textContent=data.list[24].dt_txt
      day4Tem.textContent="Temp:" + data.list[24].main.temp;
      day4wind.textContent="Wind:" + data.list[24].wind.speed;
      day4humidity.textContent="Humdity:" + data.list[24].main.humidity;

      //Day 5 forecast 
      fifthDay.textContent=data.list[32].dt_txt
      day5Tem.textContent="Temp:" + data.list[32].main.temp;
      day5wind.textContent="Wind:" + data.list[32].wind.speed;
      day5humidity.textContent="Humdity:" + data.list[32].main.humidity;

      console.log(data)
    })
}

// User input
function search(event){
  event.preventDefault();
  console.log(searchArea.value);
  city=searchArea.value;
  var cityEl=document.createElement("button");
  cityEl.textContent=city;
  recentSearch.appendChild(cityEl);
  
  getWeather(city);

}


 searchBtn.addEventListener("click",search);


 
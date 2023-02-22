//Dependencies
searchArea=document.querySelector("search-area")
var searchBtn=document.querySelector('#search-btn');

var city="london";
var APIKey = "3ceee4a866c36aa0df2373e3c69834c3";

var requestUrl="api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
  
    })
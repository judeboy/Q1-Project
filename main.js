$(document).ready(function() {

  var vailApi = 'http://api.openweathermap.org/data/2.5/weather?lat=39.6403&lon=-106.3742&APPID=9fa4cc6724a4bb5d6dac1c4c25068d46'
  var keystoneApi = 'http://api.openweathermap.org/data/2.5/weather?lat=39.6&lon=-105.99&APPID=9fa4cc6724a4bb5d6dac1c4c25068d46'
  var steamboatApi = 'http://api.openweathermap.org/data/2.5/weather?lat=40.48&lon=-106.83&APPID=9fa4cc6724a4bb5d6dac1c4c25068d46'
  var crestedButteApi = 'http://api.openweathermap.org/data/2.5/weather?lat=38.8697&lon=-106.9879&APPID=9fa4cc6724a4bb5d6dac1c4c25068d46'
  var winterParkApi = 'http://api.openweathermap.org/data/2.5/weather?lat=39.945&lon=-105.8173&APPID=9fa4cc6724a4bb5d6dac1c4c25068d46'

  function weather(location){
    return $.getJSON(location).done(function(data) {
      if (data.status !== 200) {
      }
    })
  }

  $.when(weather(vailApi), weather(keystoneApi), weather(steamboatApi), weather(crestedButteApi), weather(winterParkApi)).done(function(a1, a2, a3, a4, a5){

  let vailTemp = a1[0].main.temp
  let keystoneTemp = a2[0].main.temp
  let winterParkTemp = a5[0].main.temp
  let steamboatTemp = a3[0].main.temp
  let crestedButteTemp = a4[0].main.temp

  let vailDescribe = a1[0].weather[0].description
  let keystoneDescribe = a2[0].weather[0].description
  let winterParkDescribe = a5[0].weather[0].description
  let steamboatDescribe = a3[0].weather[0].description
  let crestedButteDescribe = a4[0].weather[0].description

  $('#weather-current-vail').append(toFahrenheit(vailTemp) + '&#8457;')
  $("#weather-current-keystone").append(toFahrenheit(keystoneTemp) + '&#8457;')
  $("#weather-current-winterPark").append(toFahrenheit(winterParkTemp) + '&#8457;')
  $("#weather-current-steamboat").append(toFahrenheit(steamboatTemp)   + '&#8457;')
  $("#weather-current-crestedButte").append(toFahrenheit(crestedButteTemp) + '&#8457;')

  $('#weather-description-vail').append(vailDescribe)
  $('#weather-description-keystone').append(keystoneDescribe)
  $('#weather-description-winterPark').append(winterParkDescribe)
  $('#weather-description-steamboat').append(steamboatDescribe)
  $('#weather-description-crestedButte').append(crestedButteDescribe)

    function toFahrenheit(place) {
      var fahr = (parseInt(place) * 9 / 5) - 459.67
      return Math.round(fahr)
    }
console.log(a2[0].weather[0].description)
  })




})//notouchy

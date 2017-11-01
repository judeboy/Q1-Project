$(document).ready(function() {

  var vailApi = 'http://api.openweathermap.org/data/2.5/weather?lat=39.6403&lon=-106.3742&APPID=9fa4cc6724a4bb5d6dac1c4c25068d46'
  var keystoneApi = 'http://api.openweathermap.org/data/2.5/weather?lat=39.6&lon=-105.99&APPID=9fa4cc6724a4bb5d6dac1c4c25068d46'
  var steamboatApi = 'http://api.openweathermap.org/data/2.5/weather?lat=40.48&lon=-106.83&APPID=9fa4cc6724a4bb5d6dac1c4c25068d46'
  var crestedButteApi = 'http://api.openweathermap.org/data/2.5/weather?lat=38.8697&lon=-106.9879&APPID=9fa4cc6724a4bb5d6dac1c4c25068d46'
  var winterParkApi = 'http://api.openweathermap.org/data/2.5/weather?lat=39.945&lon=-105.8173&APPID=9fa4cc6724a4bb5d6dac1c4c25068d46'

  // adding a check to checkboxes if in local storage
  let allCheckBoxes = $('input')
  allCheckBoxes.each(function(index, element){
    let wrapped = $(element)
    let favorite = localStorage.getItem(wrapped.attr('id')) || false
    if (favorite){
      $('#' + wrapped.attr('id')).prop('checked', true)
    }
  })

  // click event that toggles in/out of local storage
  $('input').click(function () {
    let id = $(this).attr('id')
    let isFav = localStorage.getItem(id) || false
    if (isFav) {
      localStorage.removeItem(id)
    } else {
      localStorage.setItem(id, true)
    }
  })

  function weather(location){
    return $.getJSON(location).done(function(data) {
      if (data.status !== 200) {
      }
    })
  }

  // one function for each API call
  $.when(weather(vailApi), weather(keystoneApi), weather(steamboatApi), weather(crestedButteApi), weather(winterParkApi)).done(function(w1, w2, w3, w4, w5){

    let resorts = ['vail', 'keystone', 'winterPark', 'steamboat', 'crestedButte']
    let dubs = [w1, w2, w3, w4, w5]

    temps(resorts, dubs)
    conditions(resorts, dubs)
    windy(resorts, dubs)

  })
}) // notouchy

function temps(resorts, dubs){
  let tempArray = []
  for (let i = 0; i < resorts.length; i++) {
    tempArray.push(toFahrenheit(dubs[i][0].main.temp) + '&#8457;')
  }
  for (let x = 0; x < tempArray.length; x++){
    $('#weather-current-' + resorts[x]).append(tempArray[x])
  }
}

function windy(resorts, dubs){
  let windArray = []
  for (let i = 0; i < resorts.length; i++) {
    windArray.push(toMPH(dubs[i][0].wind.speed) + ' mph')
  }
  for (let x = 0; x < windArray.length; x++){
    $('#weather-wind-' + resorts[x]).append(windArray[x])
  }
}

function conditions(resorts, dubs){
  let conditionArray = []
  for (let i = 0; i < resorts.length; i++) {
    conditionArray.push(dubs[i][0].weather[0].description)
  }
  for (let x = 0; x < conditionArray.length; x++){
    $('#weather-description-' + resorts[x]).append(conditionArray[x])
  }
}

function toFahrenheit(place) {
  let fahr = (parseInt(place) * 9 / 5) - 459.67
  return Math.round(fahr)
}
function toMPH(windSpeed){
  let mph = (parseInt(windSpeed) * 2.2369)
  return Math.round(mph)
}

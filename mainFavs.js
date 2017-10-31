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
      $('#' + wrapped.attr('id')).prop('checked', true).closest('.jumbotron').show()
    } else {
      $('#' + wrapped.attr('id')).prop('checked', false).closest('.jumbotron').hide()
    }
  })


  //toggles in/out of local storage for any check box click event
  $("input[name='favorites']").click(function () {
      let id = $(this).attr('id')
      let isFav = localStorage.getItem(id) || false
      if (isFav) {
        localStorage.removeItem(id)
      } else {
        localStorage.setItem(id, true)
      }
  })

  // if ($( "input" ).prop( "checked" ) != true) {
  // $('input').closest.('.jumbotron').hide()
  // }

  function weather(location){
    return $.getJSON(location).done(function(data) {
      if (data.status !== 200) {
      }
    })
  }



  $.when(weather(vailApi), weather(keystoneApi), weather(steamboatApi), weather(crestedButteApi), weather(winterParkApi)).done(function(w1, w2, w3, w4, w5){

  let vailTemp = w1[0].main.temp
  let keystoneTemp = w2[0].main.temp
  let winterParkTemp = w5[0].main.temp
  let steamboatTemp = w3[0].main.temp
  let crestedButteTemp = w4[0].main.temp

  $('#weather-current-vail').append(toFahrenheit(vailTemp) + '&#8457;')
  $("#weather-current-keystone").append(toFahrenheit(keystoneTemp) + '&#8457;')
  $("#weather-current-winterPark").append(toFahrenheit(winterParkTemp) + '&#8457;')
  $("#weather-current-steamboat").append(toFahrenheit(steamboatTemp) +  '&#8457;')
  $("#weather-current-crestedButte").append(toFahrenheit(crestedButteTemp) + '&#8457;')

  let vailCondition = w1[0].weather[0].description
  let keystoneCondition = w2[0].weather[0].description
  let winterParkCondition = w5[0].weather[0].description
  let steamboatCondition = w3[0].weather[0].description
  let crestedButteCondition = w4[0].weather[0].description

  $('#weather-description-vail').append(vailCondition)
  $('#weather-description-keystone').append(keystoneCondition)
  $('#weather-description-winterPark').append(winterParkCondition)
  $('#weather-description-steamboat').append(steamboatCondition)
  $('#weather-description-crestedButte').append(crestedButteCondition)

  let vailWind = w1[0].wind.speed
  let keystoneWind = w2[0].wind.speed
  let winterParkWind = w5[0].wind.speed
  let steamboatWind = w3[0].wind.speed
  let crestedButteWind = w4[0].wind.speed


  $('#weather-wind-vail').append(toMPH(vailWind) + ' mph')
  $('#weather-wind-keystone').append(toMPH(keystoneWind) + ' mph')
  $('#weather-wind-winterPark').append(toMPH(winterParkWind) + ' mph')
  $('#weather-wind-steamboat').append(toMPH(steamboatWind) + ' mph')
  $('#weather-wind-crestedButte').append(toMPH(crestedButteWind) + ' mph')

    function toFahrenheit(place) {
      let fahr = (parseInt(place) * 9 / 5) - 459.67
      return Math.round(fahr)
    }
    function toMPH(windSpeed){
      let mph = (parseInt(windSpeed) * 2.2369)
      return Math.round(mph)
    }
  })




})//notouchy

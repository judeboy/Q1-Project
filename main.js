$(document).ready(function() {
  console.log("ready!")

  var vail = 'http://api.openweathermap.org/data/2.5/weather?lat=39.6403&lon=-106.3742&APPID=9fa4cc6724a4bb5d6dac1c4c25068d46'
  var keystone = 'http://api.openweathermap.org/data/2.5/weather?lat=39.6&lon=-105.99&APPID=9fa4cc6724a4bb5d6dac1c4c25068d46'
  var steamboat = 'http://api.openweathermap.org/data/2.5/weather?lat=40.48&lon=-106.83&APPID=9fa4cc6724a4bb5d6dac1c4c25068d46'
  var crestedButte = 'http://api.openweathermap.org/data/2.5/weather?lat=38.8697&lon=-106.9879&APPID=9fa4cc6724a4bb5d6dac1c4c25068d46'
  var winterPark = 'http://api.openweathermap.org/data/2.5/weather?lat=39.945&lon=-105.8173&APPID=9fa4cc6724a4bb5d6dac1c4c25068d46'

  function weather(location){
    return $.getJSON(location).done(function(data) {
      if (data.status !== 200) {
      }
    })
  }

  $.when(weather(vail), weather(keystone), weather(steamboat), weather(crestedButte), weather(winterPark)).done(function(a1, a2, a3, a4, a5){

    let vailMain = a1[0].weather[0]


      $('#vail').append('<div>' + JSON.stringify(vailMain) + '</div>')
      console.log(vailMain)
  })



})//notouchy







//
// function keystone(){
//   return $.getJSON($keystone).done(function(data) {
//     if (data.status !== 200) {
//     }
//   })
// }
//
// function steamboat(){
//   return $.getJSON($steamboat).done(function(data) {
//     if (data.status !== 200) {
//     }
//   })
// }
//
// function crestedButte(){
//   return $.getJSON($crestedButte).done(function(data) {
//     if (data.status !== 200) {
//     }
//   })
// }
// function winterPark(){
//   return $.getJSON($winterPark).done(function(data) {
//     if (data.status !== 200) {
//     }
//   })
// }

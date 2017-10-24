$( document ).ready(function() {
    console.log( "ready!" )

    var $weather = //link to API

    //Get Http Request
    var $xhr = $.getJSON(//API LINK);
    $xhr.done(function(data) {
        if ($xhr.status !== 200) {
            return
        }
        console.log(data)
})

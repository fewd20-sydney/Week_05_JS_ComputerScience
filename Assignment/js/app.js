//var city = ['austin.jpg','la.jpg','nyc.jpg','sf.jpg','sydney.jpg'];
var city;
var cityImages = ["images/nyc.jpg","images/austin.jpg","images/la.jpg","images/sf.jpg","images/sydney.jpg"];

$(document).ready(function(){
	
     /*
    When user clicks update
    prevent form submission
    get user input then trim string of leading or trailing whitespace and store into city variable 
    if city equals "New York" or "New York City" or "NYC" then make background nyc.jpg
    else if city equals "San Francisco" or "SF" or "Bay Area" then make the background sf.jpg
    else if city equals "Los Angeles" or "LA" or "LAX"  then make the background la.jpg
    else if city equals "Austin" or "ATX" then make background austin.jpg
    else if city equals "Sydney" or "SYD" then make the background sydney.jpg
    reset user input field after submitting
    */
    
	$("form").submit(function(event){
		event.preventDefault();
		$('body').css('background-color','black');
        city = $('#city-type').val().trim(); // trim leading and trailing whitespaces
        if (city === "New York" || city === "NYC" || city === "New York City") {
            $('body').css('background-image','url('+cityImages[0]+')');
        } else if (city === "Austin" || city === "ATX") {
            $('body').css('background-image','url('+cityImages[1]+')');
        } else if (city === "Los Angeles" || city === "LAX" || city === "LA") {
            $('body').css('background-image','url('+cityImages[2]+')');
        } else if (city === "San Francisco" || city === "SF" || city === "Bay Area") {
            $('body').css('background-image','url('+cityImages[3]+')');
        } else if (city === "Sydney" || city === "SYD") {
            $('body').css('background-image','url('+cityImages[4]+')');
        }
        $('#city-type').val("");
	});
})
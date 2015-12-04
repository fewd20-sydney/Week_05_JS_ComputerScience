//var city = ['austin.jpg','la.jpg','nyc.jpg','sf.jpg','sydney.jpg'];
var city;

$(document).ready(function(){
	
     /*
    When user clicks update
    prevent form submission
    get user input and store into city variable
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
        city = $('#city-type').val();
        if (city === "New York" || city === "NYC" || city === "New York City") {
            $(‘body’).css(‘background’, url("images/nyc.jpg);
        }
	});
    
   
    
	
})
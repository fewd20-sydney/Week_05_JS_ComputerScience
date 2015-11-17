	
// Enable document.ready
$( document ).ready(function(){
	
//Listen for button click
	$('#submit-btn').click(function(e){
//Prevent default submission		
		e.preventDefault();
//Define validation variables, remove case sensitivity, define user input value
		var city = $('#city-type').val().toLowerCase();
		var valid = false;
//if conditions and validation for city keywords		
		if (city != ""){
			if (city == "syd" || city == "sydney") {
				city = "sydney";
				valid = true;
			} else if (city == "san francisco" || city == "sf" || city == "bay area") {
				city = "sf";
				valid = true;
			} else if (city == "new york" || city == "nyc" || city == "new york city"){
				city = "nyc";
				valid = true;
			} else if (city == "los angeles" || city == "la" || city == "lax"){
				city = "la";
				valid = true;
			} else if (city == "atx" || city == "austin"){
				city = "austin";
				valid = true;
			} else {
				valid = false;
			}
		}
//change background image based on validated input and alert error
		if (valid) {
			$('#background').attr("class", city);
		} else {
			alert("Sorry, This city is not in our database");
		}
		$( '#form' ).each(function(){
    		this.reset();
		});		
	});
});

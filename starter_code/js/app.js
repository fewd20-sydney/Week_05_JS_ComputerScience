function main () {

	$( "input" ).click(function(event) {
  		event.preventDefault()
	});
	// When the submit button is clicked
	$('#submit-btn').click(function() {
		// set city to the value of the input field		
		var city = $('#city-type').val();
		// if the city is known		
		if (city === "Sydney" || city === "SYD") {
			// change the background image to the city's image
			$('body').attr('class', 'sydney')
		} else if (city === "Los Angeles" || city === "LA" || city === "LAX") {
			$('body').attr('class', 'la')
		} else if (city === "New York City" || city === "New York" || city === "NYC") {
			$('body').attr('class', 'nyc');
		} else if (city == "Austin" || city === "ATX") {
			$('body').attr('class', 'austin');
		} else if (city === "San Francisco" || city === "SF" || city === "Bay Area") {
			$('body').attr('class', 'sf')
		} else {
			// else the city is not know
			// reset the background image
			$('body').removeAttr('class')
			// and alert the user
			alert("I don't know that city. Is it nice?");
		}
		// clear the input field
		$('#city-type').val('');

	});
}

$(document).ready(main);
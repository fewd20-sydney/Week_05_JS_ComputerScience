$(window).ready(function () {

	var city;
	var cityPhotoRegistry = {
		"New York" : "nyc",
		"New York City" : "nyc",
		"NYC" : "nyc",
		"San Francisco" : "sf",
		"SF" : "sf",
		"Bay Area" : "sf",
		"Los Angeles" : "la",
		"LA" : "la",
		"LAX" : "la",
		"Austin" : "austin",
		"ATX" : "austin",
		"Sydney" : "sydney",
		"SYD" : "sydney"
	}

	$("#myform").on("submit", function (e) {
		//stop the browser from refreshing the page
		e.preventDefault();

		//get user input and trim any unnecessary white space characters
		city = $("#city-type").val().trim();

		//look up user input in cityPhotoRegistry object and apply appropriate jpeg
		console.log(cityPhotoRegistry[city]);

		//Remove all classes from body to prevent issues with changing to a background then reverting back
		$("body").removeClass();

		//Add the relevant class from the registry object
		$("body").addClass(cityPhotoRegistry[city]);

		//Clear the input field
		$("#city-type").val("")

	});

})
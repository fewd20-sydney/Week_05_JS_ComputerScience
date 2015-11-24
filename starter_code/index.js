$(document).ready(function() {
	//DOM elements loaded first
	$('form').submit(function(event) {
	  event.preventDefault();
	}); //prevents sumbission of form (whether you click submit on press enter)

	$('form').submit(function() {
		$('form').find('input:text').each(function(){
        	$('input:text').val($.trim($('input:text').val()));
      	});
		//This makes it so the city name is still recognizable even if users add extra spaces before or after it

		var city = $('#city-type').val();
		if (city == ("New York") || city == ("NYC") || city ==("New York City")) { 
	    	$('body').attr('class','nyc');
	    	//changes background to image of New York City
	    	$('form')[0].reset();
	    	//clears input area for user to enter next city

	    } else if (city == ("San Francisco") || city == ("SF") || city ==("Bay Area")) {
	    	$('body').attr('class','sf');
	    	//changes background to image of San Francisco
	    	$('form')[0].reset();
	    	//clears input area for user to enter next city

	    } else if (city == ("Los Angeles") || city == ("LA") || city ==("LAX")) {
	    	$('body').attr('class','la');
	    	   //changes background to image of Los Angeles
	    	   $('form')[0].reset();
	    	//clears input area for user to enter next city

	    } else if (city == ("Austin") || city ==("ATX")) {
	    	$('body').attr('class','austin');
	    	//changes background to image of Austin
	    	$('form')[0].reset();
	    	//clears input area for user to enter next city

	    } else if (city == ("Sydney") || city ==("SYD")) {
	    	$('body').attr('class','syd');
	    	//changes background to image of Sydney
	    	$('form')[0].reset();
	    	//clears input area for user to enter next city

	    } else {
	    	$('body').removeAttr('class');
	    	alert("Enter a city!")
	    	//changes background to default image and alerts user to "Enter a city!"
	    	$('form')[0].reset();
	    	//clears input area for user to enter a city
	    }
	});
});




























  
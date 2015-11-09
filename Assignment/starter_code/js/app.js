// I create two variables: one for the City, the other to reset the input
var city;
var resetfield;


$(document).ready(function(){

	$('#submit-btn').click(function(submit){
		// Use preventdefault to cancel the default action of the click
		submit.preventDefault(); 
		// My 2 variables are define here
		var city = $('#city-type').val();
		var resetfield = $('#city-type').val('');


		// I use removeAttr to remove all classes before assigning a new one
		$('body').removeAttr("class");

		// Start the conditions using if else
		if (city === 'nyc'|| city==='new york city'|| city==='new york'){
			$('body').addClass('nyc'); // Add the css style background here
			resetfield;

		}else if (city ==='sf'|| city==='san francisco'|| city=== 'bay area'){
			$('body').addClass('sf');
			resetfield;

		}else if (city==='austin' || city==='atx'){
			$('body').addClass('austin');
			resetfield;

		}else if (city==='la' || city==='los angeles'|| city==='lax'){
			$('body').addClass('la');
			resetfield;

		}else if (city==='sydney' || city==='syd'){
			$('body').addClass('sydney');
			resetfield;

		// If the user type anything else, the default background is display
		}else {
			$('body').addClass('background');
			resetfield;
		}	

	});

});




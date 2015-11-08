
/* 	 ---------------

PSEUDOCODE

city = value of input

if city inputed ("New York” ||  "New York City” || “NYC”)
	then bg image =  nyc.jpg

else if city inputed ("San Francisco" || "SF" || "Bay Area”)
	then bg image = sf.jpg

else if city inputed ("Los Angeles" || "LA" || "LAX”)
	then bg image = la.jpg

else if city inputed ("Austin" || “ATX")
	then bg image = austin.jpg”

else if city inputed (“Sydney" || “SYD")
	then bg image = austin.jpg
 
else original image

 --------------- */

var city;
var clear;

$(document).ready(function(){   /* make a function available after the document is loaded */

	document.getElementById("submit-btn").addEventListener("click", function(event){
	    event.preventDefault();

	    city = $("#city-type:text").val();
	    city = $.trim(city);

	    clearForm = $('input[type=text]').val('');  

	    if ((city === "New York")|| (city === "New York City") || (city === "NYC")){
			$('body').css('backgroundImage','url(images/nyc.jpg)');
		} else if ((city === "San Francisco")|| (city === "SF") || (city === "Bay Area")){
			$('body').css('backgroundImage','url(images/sf.jpg)');
		} else if ((city === "Los Angeles")|| (city === "LA") || (city === "LAX")){
			$('body').css('backgroundImage','url(images/la.jpg)');
		} else if ((city === "Austin")|| (city === "ATX")){
			$('body').css('backgroundImage','url(images/austin.jpg)');
		} else if ((city === "Sydney")|| (city === "SYD")){
			$('body').css('backgroundImage','url(images/sydney.jpg)');
		} else {
			$('body').css('backgroundImage','url(images/citipix_skyline.jpg)');
		}
	})

	clearForm;
})


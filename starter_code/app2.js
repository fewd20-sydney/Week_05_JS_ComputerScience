function changeBackground(){
		
var city = $('#city-type:text').val();

if ((city === "Sydney")|| (city === "SYD")){
	$('body').css('backgroundImage','url(images/syd.jpg)');	
};

else if ((city === "Los Angeles")|| (city === "LA") || (city === "LAX")){
$('body').css('backgroundImage','url(images/los.jpg)');	
};		

else if ((city === "New York")|| (city === "New York City") || (city === "NYC")){
$('body').css('backgroundImage','url(images/nyc.jpg)');	
};		

else if ((city === "Austin")|| (city === "ATX")){
$('body').css('backgroundImage','url(images/aus.jpg)');
};			

else ((city === "San Francisco")|| (city === "SF") || (city === "Bay Area")){
$('body').css('backgroundImage','url(images/san.jpg)');
};	

$( document ).ready(function() {
	event.preventDefault();
	$('#city-type').submit();
	$('#submit-btn').click(changeBackground);
	$('#city-type').clear();
});	







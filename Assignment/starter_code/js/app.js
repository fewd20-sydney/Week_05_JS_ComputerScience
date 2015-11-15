$(document).ready(function(){
	alert('hey')

	var city = $('#city-type').val();
	if (city==='NY'||'New York'||'NYC'){
		
		$('body').css('background','url(/images/nyc.jpg) no-repeat center center fixed');
	} else if (city==='San Francisco'||'SF'||'Bay Area'){
		$('body').css('background','url(/images/sf.jpg) no-repeat center center fixed');
	} else if (city==='Los Angeles'||'LA'||'LAX'){
		$('body').css('background','url(/images/la.jpg) no-repeat center center fixed')
	} else if (city==='ATX'||'Austin'){
		$('body').css('background','url(/images/austin.jpg) no-repeat center center fixed')
	} else if (city==='SYD'||'Sydney'){
		$('body').css('background','url(/images/sydney.jpg) no-repeat center center fixed')
	}

})


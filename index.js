

$("#submit-btn").click(function(){
  event.preventDefault();
  var city = $( "#city-type" ).val();

  if (city == "nyc" || city == "NYC" || city == "New York" || city =="New York City") {
    $("body").css("background-image", "url(./images/nyc.jpg)");
  }  else if (city == "San Francisco" || city == "SF" || city == "Bay Area" || city =="New York City") {
    $("body").css("background-image", "url(./images/sf.jpg)");
  } else if (city == "Los Angeles" || city == "LA" || city == "LAX" || city =="New York City") {
    $("body").css("background-image", "url(./images/la.jpg)");
  } else if (city == "Austin" || city == "ATX") {
    $("body").css("background-image", "url(./images/austin.jpg)");
  } else if (city == "Sydney" || city == "SYD") {
    $("body").css("background-image", "url(./images/sydney.jpg)");
  } else {
    $("h5").append("Not Valid");
  }
  
});




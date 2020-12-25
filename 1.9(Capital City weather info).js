let request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all")
request.onload = function(){
    let data = JSON.parse(request.responseText);                             // Extract data from rescountries
    let lat = data[1].latlng[0];                                            // Extract lat, long of the capital of Åland Islands
    let long = data[1].latlng[1];
    console.log(`The weather data for ${data[1].capital} is shown below:`);
    weatherdata(lat,long);
}  
request.send()

request.onerror = function(){
    alert("Network error has occured(1)");
}

function weatherdata(lat,long){
    let request = new XMLHttpRequest();
    request.open("GET",`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=7cac8f6beb1346364047221b5d83e736`) 
    request.onload = function(){
        let data = JSON.parse(request.responseText);                         // Extract data from weather api
        console.log(data);                                                  // Print the final weather data object
    }
    request.send();

    request.onerror = function(){
        alert("Network error has occured(2)");
    } 
}  





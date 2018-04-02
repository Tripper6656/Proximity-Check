var locRequest;
var apiKey = 'AIzaSyC53LdjmgLbZZvBXb3W8r1kpdW2UqPJfVE';

//Get input from user from the search bar
function getValue(id) {
    //sets text to input in search bar
    text = document.getElementById(id).value;
    requestLocation(text);
    return false;
}

//Takes the text from search bar and converts it into a url to get geolocation
function requestLocation(text){
    //parse text and put in https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
    var arr = text.split(" ");
    var address = arr[0];
    //converts parsed array of text into an address to put into url
    for(i = 1; i < arr.length; i++){
        address = address + '+' + arr[i];
    }
    //creates url
    var webAddr = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + apiKey;

    //JSON with all information about address
    var startAddr = JSON.parse(Get(webAddr));

    //alert(startAddr.results[0].formatted_address);
    
    //Longitude and Latitude of starting address
    var addrLat = startAddr.results[0].geometry.location.lat;
    var addrLng = startAddr.results[0].geometry.location.lng;

    //Goes to method to handle the hospital
    //creates url for hospitals
    var hospUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?location=" + lat + "," + lng + "&radius=10&type=hospital&key=" + apiKey;

    //Get JSON with all hospitals in area
    var hospitals = JSON.parse(Get(hospUrl));

    alert(hospitals.results[0].formatted_address);

    var hospName = hospitals.results[i].name;
    var hospAddr = hospitals.results[i].formatted_address;
    var hospLat = hospitals.results[i].geometry.location.lat;
    var hospLng = hospitals.results[i].geometry.location.lng;
}

//Returns JSON with information for address
function Get(myUrl){
    var resp = '';
    var httpReq = new XMLHttpRequest();
    if(httpReq != null){
        httpReq.open("GET", myUrl, false);
        httpReq.send();
        resp = httpReq.responseText;
    }
    return resp;
}


//Gets hospital JSON search and prints name, address and distance of hospital
function printHosp(lat, lng, i){
    //creates url for hospitals
    var hospUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?location=" + lat + "," + lng + "&radius=10&type=hospital&key=" + apiKey;

    //Get JSON with all hospitals in area
    var hospitals = JSON.parse(Get(hospUrl));
    console.log(hospitals.results[0].name);

    var hospName = hospitals.results[i].name;
    var hospAddr = hospitals.results[i].formatted_address;
    var hospLat = hospitals.results[i].geometry.location.lat;
    var hospLng = hospitals.results[i].geometry.location.lng;

    return(hospName + " at " + hospAddr + ": Lat:" + hospLat + " and Lng:" + hospLng);
}
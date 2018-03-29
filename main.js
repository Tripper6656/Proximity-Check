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
    webAddr = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + apiKey;

    //JSON with all information about address
    var startAddr = JSON.parse(Get(webAddr));
    
    //Longitude and Latitude of starting address
    var addrLat = startAddr.results[0].geometry.location.lat;
    var addrLng = startAddr.results[0].geometry.location.lng;

    //creates url for hospitals
    var hospUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + addrLat + "," + addrLng + "&radius=20&keyword=hospital&key=" + apiKey;
    console.log(hospUrl);
}

//Returns JSON with information for address
function Get(myUrl){
    var httpReq = new XMLHttpRequest();
    httpReq.open("GET", myUrl, false);
    httpReq.send(null);
    return httpReq.responseText;
}
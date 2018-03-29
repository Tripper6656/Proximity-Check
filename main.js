var locRequest;
var apiKey = 'AIzaSyC53LdjmgLbZZvBXb3W8r1kpdW2UqPJfVE';

//Get input from user from the search bar
function getValue(id) {
    //sets text to input in search bar
    text = document.getElementById(id).value;
    document.write(text);
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

    var startAddr = JSON.parse(Get(webAddr));
    alert(startAddr.formatted_address);
}

function getJSONP(url, success){
    var ud = '_'+ + new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] || document.documentElement;

    window[ud] = function(data){
        head.removeChild()
    }
}
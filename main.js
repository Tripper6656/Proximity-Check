var locRequest;
var apiKey = AIzaSyC53LdjmgLbZZvBXb3W8r1kpdW2UqPJfVE;

function getValue(id) {
    text = document.getElementById(id).value;
    document.write(text);
    requestLocation(text);
    return false;
}

function requestLocation(text){
    //parse text and put in https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
    var arr = text.split(" ");
    var address = arr[0];
    for(i = 1; i < arr.length; i++){
        address = address + '+' + arr[i];
    }
    webAddr = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyC53LdjmgLbZZvBXb3W8r1kpdW2UqPJfVE";
    alert(webAddr);
}
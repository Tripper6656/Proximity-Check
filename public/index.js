var locRequest;
var apiKey = 'AIzaSyC53LdjmgLbZZvBXb3W8r1kpdW2UqPJfVE';
var dataCombined = {};

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
    var lat = 0;
    var lng = 0;
    
    //document.getElementById("nameHosp").innerHTML = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + address + "&radius=16090&type=local_government_office&key=" + apiKey;
    
    Promise.all([
        fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + apiKey),
        fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + address + "&radius=16090&type=hospital&key=" + apiKey),
        fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + address + "&radius=16090&type=post_office&key=" + apiKey),
        fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + address + "&radius=16090&type=fire_station&key=" + apiKey),
        fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + address + "&radius=16090&type=school&key=" + apiKey),
        fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + address + "&radius=16090&type=bank&key=" + apiKey),
        fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + address + "&radius=16090&type=veterinary_care&key=" + apiKey),
        fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + address + "&radius=16090&type=supermarket&key=" + apiKey),
        fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + address + "&radius=16090&type=park&key=" + apiKey),
        fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + address + "&radius=16090&type=movie_theater&key=" + apiKey),
        fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + address + "&radius=16090&type=bar&key=" + apiKey),
        fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + address + "&radius=16090&type=gym&key=" + apiKey),
        fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + address + "&radius=16090&type=stadium&key=" + apiKey),
        fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + address + "&radius=16090&type=cemetery&key=" + apiKey),
        fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + address + "&radius=16090&type=cafe&key=" + apiKey),
        fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + address + "&radius=16090&type=restaurant&key=" + apiKey)
    ]).then(allResponses => {
        allResponses[0].json().then(data => {
            document.getElementById("start").innerHTML = data.results[0].formatted_address;
            lat = data.results[0].geometry.location.lat;
            lng = data.results[0].geometry.location.lng;
        });
        allResponses[1].json().then(data => {
            document.getElementById("nameHosp").innerHTML = data.results[0].name;
            document.getElementById("addressHosp").innerHTML = data.results[0].formatted_address;

            var lat2 = data.results[0].geometry.location.lat;
            var lng2 = data.results[0].geometry.location.lng;
            document.getElementById("distHosp").innerHTML = distance(lat,lng,lat2,lng2) + " Miles Away";
        });
        allResponses[2].json().then(data => {
            document.getElementById("namePost").innerHTML = data.results[0].name;
            document.getElementById("addressPost").innerHTML = data.results[0].formatted_address;
            
            var lat2 = data.results[0].geometry.location.lat;
            var lng2 = data.results[0].geometry.location.lng;
            document.getElementById("distPost").innerHTML = distance(lat,lng,lat2,lng2) + " Miles Away";
        });
        allResponses[3].json().then(data => {
            document.getElementById("nameFire").innerHTML = data.results[0].name;
            document.getElementById("addressFire").innerHTML = data.results[0].formatted_address;
            
            var lat2 = data.results[0].geometry.location.lat;
            var lng2 = data.results[0].geometry.location.lng;
            document.getElementById("distFire").innerHTML = distance(lat,lng,lat2,lng2) + " Miles Away";
        });
        allResponses[4].json().then(data => {
            document.getElementById("nameSchool").innerHTML = data.results[0].name;
            document.getElementById("addressSchool").innerHTML = data.results[0].formatted_address;
            
            var lat2 = data.results[0].geometry.location.lat;
            var lng2 = data.results[0].geometry.location.lng;
            document.getElementById("distSchool").innerHTML = distance(lat,lng,lat2,lng2) + " Miles Away";
        });
        allResponses[5].json().then(data => {
            document.getElementById("nameBank").innerHTML = data.results[0].name;
            document.getElementById("addressBank").innerHTML = data.results[0].formatted_address;
            
            var lat2 = data.results[0].geometry.location.lat;
            var lng2 = data.results[0].geometry.location.lng;
            document.getElementById("distBank").innerHTML = distance(lat,lng,lat2,lng2) + " Miles Away";
        });
        allResponses[6].json().then(data => {
            document.getElementById("nameVet").innerHTML = data.results[0].name;
            document.getElementById("addressVet").innerHTML = data.results[0].formatted_address;
            
            var lat2 = data.results[0].geometry.location.lat;
            var lng2 = data.results[0].geometry.location.lng;
            document.getElementById("distVet").innerHTML = distance(lat,lng,lat2,lng2) + " Miles Away";
        });
        allResponses[7].json().then(data => {
            document.getElementById("nameMrkt").innerHTML = data.results[0].name;
            document.getElementById("addressMrkt").innerHTML = data.results[0].formatted_address;
            
            var lat2 = data.results[0].geometry.location.lat;
            var lng2 = data.results[0].geometry.location.lng;
            document.getElementById("distMrkt").innerHTML = distance(lat,lng,lat2,lng2) + " Miles Away";
        });
        allResponses[8].json().then(data => {
            document.getElementById("namePark").innerHTML = data.results[0].name;
            document.getElementById("addressPark").innerHTML = data.results[0].formatted_address;
            
            var lat2 = data.results[0].geometry.location.lat;
            var lng2 = data.results[0].geometry.location.lng;
            document.getElementById("distPark").innerHTML = distance(lat,lng,lat2,lng2) + " Miles Away";
        });
        allResponses[9].json().then(data => {
            document.getElementById("nameMovie").innerHTML = data.results[0].name;
            document.getElementById("addressMovie").innerHTML = data.results[0].formatted_address;
            
            var lat2 = data.results[0].geometry.location.lat;
            var lng2 = data.results[0].geometry.location.lng;
            document.getElementById("distMovie").innerHTML = distance(lat,lng,lat2,lng2) + " Miles Away";
        });
        allResponses[10].json().then(data => {
            document.getElementById("nameBar").innerHTML = data.results[0].name;
            document.getElementById("addressBar").innerHTML = data.results[0].formatted_address;
            
            var lat2 = data.results[0].geometry.location.lat;
            var lng2 = data.results[0].geometry.location.lng;
            document.getElementById("distBar").innerHTML = distance(lat,lng,lat2,lng2) + " Miles Away";
        });
        allResponses[11].json().then(data => {
            document.getElementById("nameGym").innerHTML = data.results[0].name;
            document.getElementById("addressGym").innerHTML = data.results[0].formatted_address;
            
            var lat2 = data.results[0].geometry.location.lat;
            var lng2 = data.results[0].geometry.location.lng;
            document.getElementById("distGym").innerHTML = distance(lat,lng,lat2,lng2) + " Miles Away";
        });
        allResponses[12].json().then(data => {
            document.getElementById("nameStad").innerHTML = data.results[0].name;
            document.getElementById("addressStad").innerHTML = data.results[0].formatted_address;
            
            var lat2 = data.results[0].geometry.location.lat;
            var lng2 = data.results[0].geometry.location.lng;
            document.getElementById("distStad").innerHTML = distance(lat,lng,lat2,lng2) + " Miles Away";
        });
        allResponses[13].json().then(data => {
            document.getElementById("nameCem").innerHTML = data.results[0].name;
            document.getElementById("addressCem").innerHTML = data.results[0].formatted_address;
            
            var lat2 = data.results[0].geometry.location.lat;
            var lng2 = data.results[0].geometry.location.lng;
            document.getElementById("distCem").innerHTML = distance(lat,lng,lat2,lng2) + " Miles Away";
        });
        allResponses[14].json().then(data => {
            document.getElementById("nameCafe").innerHTML = data.results[0].name;
            document.getElementById("addressCafe").innerHTML = data.results[0].formatted_address;
            
            var lat2 = data.results[0].geometry.location.lat;
            var lng2 = data.results[0].geometry.location.lng;
            document.getElementById("distCafe").innerHTML = distance(lat,lng,lat2,lng2) + " Miles Away";
        });
        allResponses[15].json().then(data => {
            document.getElementById("nameRest1").innerHTML = "1. " + data.results[0].name;
            document.getElementById("nameRest2").innerHTML = "2. " + data.results[1].name;
            document.getElementById("nameRest3").innerHTML = "3. " + data.results[2].name;
            document.getElementById("nameRest4").innerHTML = "4. " + data.results[3].name;
            document.getElementById("nameRest5").innerHTML = "5. " + data.results[4].name;
            document.getElementById("nameRest6").innerHTML = "6. " + data.results[5].name;
            document.getElementById("nameRest7").innerHTML = "7. " + data.results[6].name;
            document.getElementById("nameRest8").innerHTML = "8. " + data.results[7].name;
            document.getElementById("nameRest9").innerHTML = "9. " + data.results[8].name;
            document.getElementById("nameRest10").innerHTML = "10. " + data.results[9].name;
        });
    });
}

//Haversine formula
function distance(lat1, lon1, lat2, lon2){
    var radlat1 = Math.PI * lat1/180;
	var radlat2 = Math.PI * lat2/180;
	var theta = lon1-lon2;
	var radtheta = Math.PI * theta/180;
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist);
	dist = dist * 180/Math.PI;
	dist = dist * 60 * 1.1515;
    return dist;
}
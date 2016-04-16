// JavaScript source code
var longitude;
var latitude;
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
    function showPosition(position) {
        
        longitude = position.coords.longitude;
        latitude = position.coords.latitude
        console.log("%s" "%s", longitude,latitude);
    }
}
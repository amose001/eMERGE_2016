// JavaScript source code
var longitude;
var latitude;
getUserLocation();
function getUserLocation() {
    //alert('1');
    if (navigator.geolocation) {
        //alert('2');
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
    function showPosition(position) { 
        longitude = position.coords.longitude;
        latitude = position.coords.latitude
        console.log("%s %s", longitude,latitude);
    }
}
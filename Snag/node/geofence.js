// JavaScript source code
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
var gMapAPI = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDl33a_Or3jDJukn6_Kr8KQjqKOInEyzoM&callback=initMap"

function getCoordinates(user) {
    var findCoordinates = function (db, callback) {
        var cursor = db.collection(user).find();

    }
}

function createFence(x,y) {
    var myLatlng = new google.maps.LatLng(x,y);
    var mapOptions = {
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
}

function checkLocation() {

}
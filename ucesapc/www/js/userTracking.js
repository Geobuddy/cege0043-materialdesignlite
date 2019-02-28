var userMarker

// Track position
function trackLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        document.getElementById('showLocation').innerHTML = 'Geolocation is not supported by this browser.';
    }
}
//

function showPosition(position) {
    if (userMarker) {
        mymap.removeLayer(userMarker)
    }
    userMarker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap)
        .bindPopup("<b>Hello!</b><br/>This is my position").openPopup();

    mymap.setView([position.coords.latitude, position.coords.longitude], 15)

    getDistance()

}

// Track Distance

function getDistance() {
    navigator.geolocation.getCurrentPosition(getDistanceFromMultiplePoints);
}

function getDistanceFromPoint(position) {
    var lat = 51.524615;
    var lng = -0.13818;
    var distance = calculateDistance(position.coords.latitude, position.coords.longitude, lat, lng, 'K');
    if (distance <= 0.1){
        alert("You are within 100m of the fixed point")
    }

}
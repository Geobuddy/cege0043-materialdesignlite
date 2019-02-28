var userMarker

// Track position
function trackLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        document.getElementById('showLocation').innerHTML = 'Geolocation is not supported by this browser.';
    }
}

function showPosition(position) {
    if (userMarker) {
        mymap.removeLayer(userMarker)
    }
    userMarker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap)
        .bindPopup("<b>Hello!</b><br/>This is my position").openPopup();

    mymap.setView([position.coords.latitude, position.coords.longitude], 20)

    getDistance()

}
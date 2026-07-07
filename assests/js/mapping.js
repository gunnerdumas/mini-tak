var map = L.map('map').fitWorld();
// maps
var osmSkiTrails = L.tileLayer('https://tile.waymarkedtrails.org/slopes/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data © OpenStreetMap contributors, OpenSnowMap'
}).addTo(map);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

osm.addTo(map);
osmSkiTrails.addTo(map);


// map controls and setup
var baseMaps = {
    "OpenStreetMap": osm,
    }

var overlayMaps = {
    "SkiTrails": osmSkiTrails
}
    
var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);


// gps setup and activate
// map.locate({setView: true, maxZoom: 16})
// function onLocationFound(e) {
//     var radius = e.accuracy;

//     L.marker(e.latlng).addTo(map).bindPopup("Your within " + radius + " meters from here").openPopup();
//     L.circle(e.latlng, radius).addTo(map);
// }
// function onLocationError(e) {
//     alert(e.message);
// }

// map.on('locationfound', onLocationFound);
// map.on('locationerror', onLocationError);
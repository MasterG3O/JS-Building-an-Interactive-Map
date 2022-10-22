// create map
const myMap = L.map('map',{
    center:[48.868672, 2.342130],
    zoom:12
})

// Add OpenStreetMap tiles:
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href-"http: //ww.openstreetmap.org/ copyright">OpenStreetMap</a>'


}).addTo(myMap)

// create and main add geolocation marker
const marker = L.marker([48.87007,2.346453])
marker.addTo(mymap).bindPopup('<p1><b> The Hoxton, Paris</b></p1>').openPopup()
// draw the 2nd arrondissement
// Draw the 2nd Arrondissement   
var polygon  L.polygon([                                       
    [48.863368120198004, 2.3509079846928516],
    [48.86933262048345, 2.3542531602919805],
    [48.87199261164275, 2.3400569901592183],
    [48.86993336274516, 2.3280142476578813] ,
    [48.86834104280146, 2.330308418109664],
],{
    fill: false,
    color: 'blue'
}
).addTo(mymap);
// Metro station markers:
const rS = L.marker([48.866200610611926, 2.352236247419453]).bindPopup('Réaumur-Sébastopol')
const sSD = L.marker([48.869531786321566, 2.3528590208055196]).bindPopup('Strasbourg-Saint-Denis')
const sentier = L.marker([48.8673721067762, 2.347107922912739]).bindPopup('Sentier')
const bourse = L.marker([48.86868503971672, 2.3412285142058167]).bindPopup('Bourse')
const qS = L.marker([48.869560129483226, 2.3358638645569543]).bindPopup('Quatre Septembre')
const gB = L.marker([48.871282159004856, 2.3434818588892714]).bindPopup('Grands Boulevards')

const stations = L.layerGroup([rS, sSD, sentier, bourse, qS, gB]).addTo(myMap)


// create red pin marker


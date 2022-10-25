document.getElementById('submit-butt').addEventListener('click', (event) => {
    event.preventDefault()
    let selectedBusiness = document.getElementById('user-selection').value
    getFoursquareBusinesses(selectedBusiness)
    
})

async function getCoords(){
    let pos = await new Promise((resolve,reject) =>{;
    navigator.geolocation.getCurrentPosition(resolve,reject);
})
return[pos.coords.latitude, pos.coords.longitude]
}

const businessMap = {
    map: {},
    userCoords: [48.868672, 2.342130],
    construct: function() {
        // this will generate the map
        this.map = L.map('map', {
            // Center it over user location
            center: this.userCoords,
            zoom: 10,
        })
        // add openstreetmap tiles
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map)
        // Add user location to map
        const marker = L.marker(this.userCoords)
        // Apply marker + ppup over use
        marker.addTo(this.map).bindPopup('<b>Current Location</b>').openPopup()
    },
}

async function getFoursquareBusinesses( business) {
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', Authorization: 'fsq3okpTp3S6RmdzueZPU4R7LpIeDvV+FFjtz61gXSJS7ME='}
    };
    
    let response = await fetch(`https://api.foursquare.com/v3/places/search?query=${business}&ll=${businessMap.userCoords[0]}%2C${businessMap.userCoords[1]}&limit=5`, options)
    let jsonResponse = await response.json()
    let businessesResults = jsonResponse.results
    businessesResults.forEach((business) => {
        const marker = L.marker([business.geocodes.main.latitude, business.geocodes.main.longitude])
     
        
        marker.addTo(businessMap.map).bindPopup(`<b>${business.name}</b>`)
    })
}
window.onload = async () => {
    const userCoords = await getCoords()
    businessMap.userCoords = userCoords
    businessMap.construct()
}
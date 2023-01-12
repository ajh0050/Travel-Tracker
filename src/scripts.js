// import live here
import './css/styles.css';
import Trip from './Trip'
import './images/turing-logo.png'
import returnDataPromises from './fetchData';

// query selectors go here

// global variables used for data model here
let allTravelers
let allTrips
let allDestinations
let currentTraveler = {
    id: 3,
    name: "Sibby Dawidowitsch",
    travelerType: "shopper"
    }

//functions here
function fetchApiCalls() {
    returnDataPromises().then((data) => {
        allTravelers = data[0].travelers
        allDestinations = data[2].destinations
        allTrips = data[1].trips.map((item) => new Trip(item, allDestinations))

        loadHandler()
    }
    )

}

function loadHandler() {
    console.log("alltravelers", allTravelers)
    console.log("allTrips", allTrips)
    console.log("all destinations", allDestinations)
}

//event listeners here
window.addEventListener("load", fetchApiCalls())
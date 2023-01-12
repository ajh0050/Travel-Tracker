// import live here
import './css/styles.css';
import Trip from './Trip'
import Traveler from './Traveler'
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
    currentTraveler = new Traveler(allTravelers[2], allTrips)

    let todaysDate  = new Date("01/15/2021")
    console.log("currentTraveler", currentTraveler)
    console.log("pastTrips", currentTraveler.getPastTrips(todaysDate))
    console.log("future trips", currentTraveler.getFutureTrips(todaysDate))
    console.log("total cost", currentTraveler.getTotalAmountSpentThisYear(2020))

}

//event listeners here
window.addEventListener("load", fetchApiCalls())
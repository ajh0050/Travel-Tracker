// import live here
import './css/styles.css';

import './images/turing-logo.png'
import returnDataPromises from './fetchData';

// query selectors go here

// global variables used for data model here
let allTravelers
let allTrips
let allDestinations
let currentTraveler

//functions here
function fetchApiCalls() {
    returnDataPromises().then((data) => {
        allTravelers = data[0].travelers
        allTrips = data[1].trips
        allDestinations = data[2].destinations

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
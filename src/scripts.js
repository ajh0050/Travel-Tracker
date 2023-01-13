// import live here
import './css/styles.css';
import Trip from './Trip'
import Traveler from './Traveler'
import './images/turing-logo.png'
import returnDataPromises from './fetchData';

// query selectors go here
const welcomeText = document.querySelector(".welcome-text")
const totalSpentThisYearOnTrips = document.querySelector(".total-spent-this-year")
const pendingTripsOfCurrentTraveler = document.querySelector(".current-traveler-pending-trips")
const upcomingTripsOfCurrentTraveler = document.querySelector(".current-traveler-upcoming-trips")
const pastTripsOfCurrentTraveler = document.querySelector(".current-traveler-past-trips")


// global variables used for data model here
let allTravelers
let allTrips
let allDestinations
let currentTraveler = {
    id: 3,
    name: "Sibby Dawidowitsch",
    travelerType: "shopper"
    }
let todaysDate = new Date()

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
function generateRandomIndex() {
    return Math.floor(Math.random() * allTravelers.length);
  }

function loadHandler() {
    // console.log("alltravelers", allTravelers)
    // console.log("allTrips", allTrips)
    // console.log("all destinations", allDestinations)
    // currentTraveler = new Traveler(allTravelers[2], allTrips)

    // let todaysDate  = new Date("01/15/2021")
    // console.log("currentTraveler", currentTraveler)
    // console.log("pastTrips", currentTraveler.getPastTrips(todaysDate))
    // console.log("future trips", currentTraveler.getFutureTrips(todaysDate))
    // console.log("total cost", currentTraveler.getTotalAmountSpentThisYear(2020))
    
    currentTraveler = new Traveler(allTravelers[generateRandomIndex()], allTrips)
    displayCurrentTravelerTrips()
    console.log(currentTraveler)
}


function displayCurrentTravelerTrips() {
    displayCurrentTravelerPendingTrips()
    displayCurrentTravelerUpcomingTrips()
    displayCurrentTravelerPastTrips()
    displayCurrentTravelerHeader()
}

function displayCurrentTravelerHeader() {
    welcomeText.innerHTML = `Welcome ${currentTraveler.name}`
    totalSpentThisYearOnTrips.innerHTML = `Total Spent On Trips This Year: $${currentTraveler.getTotalAmountSpentThisYear(todaysDate.getFullYear())}`
}

function displayCurrentTravelerPendingTrips() {
    pendingTripsOfCurrentTraveler.innerHTML = ``;
    if (currentTraveler.getPendingTrips().length > 0) {
        currentTraveler.getPendingTrips().forEach((trip) => {
            console.log("is this happening")
            pendingTripsOfCurrentTraveler.innerHTML += `
            <article class="trip-card">
                  <img class="card-image" src=${trip.destinationImage} alt=${trip.destinationImageAltText} style="width:100%">
                  <div class="card-footer-container">
                    <h4 class="trip-card-label">${trip.destinationName}</h4>
                    <p class="trip-card-info">
                    Date of Trip: ${trip.date.getDay()}/${trip.date.getMonth()}/${trip.date.getFullYear()}
                    Duration: ${trip.numberOfDays} days
                    Travelers: ${trip.numberOfTravelers}
                    Total Trip Cost: $${trip.totalTripCost}
                    </p> 
                  </div>
            </article>
            `;
        })
    }
    
    if(currentTraveler.getPendingTrips().length === 0){
        pendingTripsOfCurrentTraveler.innerHTML = `
        <h5 class="empty-section-text">There are currently no pending trips </h5>
        `;
    }
   
}

function displayCurrentTravelerUpcomingTrips() {
    upcomingTripsOfCurrentTraveler.innerHTML = ``;
    if (currentTraveler.getFutureTrips(todaysDate).length > 0) {
        currentTraveler.getFutureTrips(todaysDate).forEach((trip) => {
            upcomingTripsOfCurrentTraveler.innerHTML += `
            <article class="trip-card">
                  <img class="card-image" src=${trip.destinationImage} alt=${trip.destinationImageAltText} style="width:100%">
                  <div class="card-footer-container">
                    <h4 class="trip-card-label">${trip.destinationName}</h4>
                    <p class="trip-card-info">
                    Date of Trip: ${trip.date.getDay()}/${trip.date.getMonth()}/${trip.date.getFullYear()}
                    Duration: ${trip.numberOfDays} days
                    Travelers: ${trip.numberOfTravelers}
                    Total Trip Cost: $${trip.totalTripCost}
                    </p> 
                  </div>
            </article>
            `;
        })
    }
    
    if(currentTraveler.getFutureTrips(todaysDate).length === 0){
        upcomingTripsOfCurrentTraveler.innerHTML = `
        <h5 class="empty-section-text">There are currently no upcoming trips </h5>
        `;
    }
}

function displayCurrentTravelerPastTrips() {
    pastTripsOfCurrentTraveler.innerHTML = ``;
    if (currentTraveler.getPastTrips(todaysDate).length > 0) {
        currentTraveler.getPastTrips(todaysDate).forEach((trip) => {
            pastTripsOfCurrentTraveler.innerHTML += `
            <article class="trip-card">
                  <img class="card-image" src=${trip.destinationImage} alt=${trip.destinationImageAltText} style="width:100%">
                  <div class="card-footer-container">
                    <h4 class="trip-card-label">${trip.destinationName}</h4>
                    <p class="trip-card-info">
                    Date of Trip: ${trip.date.getDay()}/${trip.date.getMonth()}/${trip.date.getFullYear()}
                    Duration: ${trip.numberOfDays} days
                    Travelers: ${trip.numberOfTravelers} 
                    Total Trip Cost: $${trip.totalTripCost}
                    </p> 
                  </div>
            </article>
            `;
        })
    }
    
    if(currentTraveler.getPastTrips(todaysDate).length === 0){
        pastTripsOfCurrentTraveler.innerHTML = `
        <h5 class="empty-section-text">There are currently no past trips </h5>
        `;
    }
}

//event listeners here
window.addEventListener("load", fetchApiCalls())
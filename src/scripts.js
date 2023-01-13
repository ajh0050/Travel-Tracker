"use strict";

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
const newTripEstimatedCostDisplay = document.querySelector(".estimated-new-trip-cost-display")

const createNewTripViewButton = document.querySelector('.create-new-trip-view-button')
const viewCurrentTravelerTripsDisplayButton = document.querySelector('.view-trips-display-button')
const getNewTripEstimatedCostButton = document.querySelector('.view-estimated-trip-cost-button')

const newTripFormDestinationsSelect = document.querySelector("#newTripDestination")
const newTripDate = document.querySelector('#newTripDate')
const newTripDuration = document.querySelector('#newTripDuration')
const newTripDestination = document.querySelector('#newTripDestination')
const newTripNumberOfTravelers = document.querySelector('#newTripNumberOfTravelers')

const travelerDashboardView = document.querySelector('.traveler-dashboard-view')
const travelerTripsDisplay = document.querySelector('.traveler-trips-display')
const newTripFormView = document.querySelector('.new-trip-form-view')

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

function hideElement (hideThis) {
    hideThis.classList.add("hidden")
}

function showElement (showThis) {
    showThis.classList.remove("hidden")
}

function loadHandler() {
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
                    Date of Trip: ${trip.date.getDay()}/${trip.date.getMonth()}/${trip.date.getFullYear()} <br>
                    Duration: ${trip.numberOfDays} days <br>
                    Travelers: ${trip.numberOfTravelers} <br>
                    Total Trip Cost: $${trip.totalTripCost} <br>
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
                    Date of Trip: ${trip.date.getDay()}/${trip.date.getMonth()}/${trip.date.getFullYear()} <br>
                    Duration: ${trip.numberOfDays} days <br>
                    Travelers: ${trip.numberOfTravelers} <br>
                    Total Trip Cost: $${trip.totalTripCost} <br>
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
                    Date of Trip: ${trip.date.getDay()}/${trip.date.getMonth()}/${trip.date.getFullYear()} <br>
                    Duration: ${trip.numberOfDays} days <br>
                    Travelers: ${trip.numberOfTravelers} <br>
                    Total Trip Cost: $${trip.totalTripCost} <br>
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

function createDestinationOptionSleections() {
    newTripFormDestinationsSelect.innerHTML = ``;
    allDestinations.forEach((destination)=>{
        let newOption = new Option(destination.destination, destination.id)
        newTripFormDestinationsSelect.add(newOption, undefined);
    })
}

function displayNewTripFormView() {
    hideElement(createNewTripViewButton)
    hideElement(travelerTripsDisplay)
    showElement(newTripFormView)
    showElement(viewCurrentTravelerTripsDisplayButton)
    createDestinationOptionSleections()
}

function displayEstimatedCostForNewTrip(){
    console.log("new trip date value",newTripDate.value)
    console.log("new trip destination id value",newTripDestination.value)
    if (newTripDate.value === ""|| newTripDuration.value ==="" || newTripDestination.value === "" || newTripNumberOfTravelers ==="") {
        alert("Form must be completely filled")
    } else {
        let newDate = new Date(newTripDate.value)
        let reformattedDated = `${newDate.getFullYear()}/${newDate.getMonth()}/${newDate.getDay()}`

        let newTripData = {
            id: (allTrips.length+1),
            userID: currentTraveler.id,
            destinationID: Number(newTripDestination.value),
            travelers: newTripNumberOfTravelers.value,
            date: reformattedDated,
            duration: newTripDuration.value,
            status: "pending",
            suggestedActivities: [ ]
            }
        let newTrip = new Trip(newTripData,allDestinations)
        newTripEstimatedCostDisplay.innerText = `This trip has an estimated cost of :$${newTrip.getTotalTripCost()}`
    }
}

//event listeners here
window.addEventListener("load", fetchApiCalls())

createNewTripViewButton.addEventListener('click', (e) => {
    e.preventDefault();
    displayNewTripFormView()
})

viewCurrentTravelerTripsDisplayButton.addEventListener('click', (e)=>{
    e.preventDefault()
    hideElement(viewCurrentTravelerTripsDisplayButton)
    hideElement(newTripFormView)
    showElement(travelerTripsDisplay)
    showElement(createNewTripViewButton)
})

getNewTripEstimatedCostButton.addEventListener('click', (e)=> {
    e.preventDefault()
    displayEstimatedCostForNewTrip()
})
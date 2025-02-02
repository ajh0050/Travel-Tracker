"use strict";

// import live here
import './css/styles.css';
import Trip from './Trip'
import Traveler from './Traveler'
import returnDataPromises from './fetchData';
import tripCardHTML from './trip-card-html';


// query selectors go here
const welcomeText = document.querySelector(".welcome-text")
const totalSpentThisYearOnTrips = document.querySelector(".total-spent-this-year")
const pendingTripsOfCurrentTraveler = document.querySelector(".current-traveler-pending-trips")
const upcomingTripsOfCurrentTraveler = document.querySelector(".current-traveler-upcoming-trips")
const pastTripsOfCurrentTraveler = document.querySelector(".current-traveler-past-trips")
const newTripEstimatedCostDisplay = document.querySelector(".estimated-new-trip-cost-display")
const loginErrorMessage = document.querySelector('.login-error-message')

const createNewTripViewButton = document.querySelector('.create-new-trip-view-button')
const viewCurrentTravelerTripsDisplayButton = document.querySelector('.view-trips-display-button')
const getNewTripEstimatedCostButton = document.querySelector('.view-estimated-trip-cost-button')
const signOutButton = document.querySelector('.sign-out-button')

const newTripForm = document.querySelector('.new-trip-form')
const newTripFormDestinationsSelect = document.querySelector("#newTripDestination")
const newTripDate = document.querySelector('#newTripDate')
const newTripDuration = document.querySelector('#newTripDuration')
const newTripDestination = document.querySelector('#newTripDestination')
const newTripNumberOfTravelers = document.querySelector('#newTripNumberOfTravelers')

const loginForm = document.querySelector('.login-form')
const username = document.querySelector('#loginUsername')
const password = document.querySelector('#loginPassword')

const travelerDashboardView = document.querySelector('.traveler-dashboard-view')
const travelerTripsDisplay = document.querySelector('.traveler-trips-display')
const newTripFormView = document.querySelector('.new-trip-form-view')
const loginView = document.querySelector('.login-view')
// global variables used for data model here
let allTravelers
let allTrips
let allDestinations
let currentTraveler = null

let todaysDate = new Date()

//functions here
function fetchApiCalls() {
    return returnDataPromises().then((data) => {
        allTravelers = data[0].travelers
        allDestinations = data[2].destinations
        allTrips = data[1].trips.map((item) => new Trip(item, allDestinations))

        loadHandler()
    })
}

function hideElement(hideThis) {
    hideThis.classList.add("hidden")
}

function showElement(showThis) {
    showThis.classList.remove("hidden")
}

function loadHandler() {
    if (currentTraveler === null) {
        currentTraveler = new Traveler(allTravelers[2], allTrips)
    }
    displayCurrentTravelerTrips()
}

function displayCurrentTravelerTrips() {
    displayCurrentTravelerPendingTrips()
    displayCurrentTravelerUpcomingTrips()
    displayCurrentTravelerPastTrips()
    displayCurrentTravelerHeader()
}

function postDisplayCurrentTravelerTrips() {
    let traveler = allTravelers.find(traveler => currentTraveler.userID === traveler.id)
    currentTraveler = new Traveler(traveler, allTrips)
    displayCurrentTravelerPendingTrips()
    displayCurrentTravelerUpcomingTrips()
    displayCurrentTravelerPastTrips()
    displayCurrentTravelerHeader()
}

function displayCurrentTravelerHeader() {
    welcomeText.innerHTML = `Welcome ${currentTraveler.name}`
    totalSpentThisYearOnTrips.innerHTML = `Total Spent On Trips This Year: $${currentTraveler.getTotalAmountSpentThisYear(todaysDate.getFullYear()).toLocaleString("en-US")}`
}

function displayCurrentTravelerPendingTrips() {
    pendingTripsOfCurrentTraveler.innerHTML = ``;
    if (currentTraveler.getPendingTrips().length > 0) {
        currentTraveler.getPendingTrips().forEach((trip) => {
            pendingTripsOfCurrentTraveler.innerHTML += tripCardHTML(trip, formatDateToHumanReadableVersion(trip.date))
        })
    }

    if (currentTraveler.getPendingTrips().length === 0) {
        pendingTripsOfCurrentTraveler.innerHTML = `
        <p class="empty-section-text">There are currently no pending trips </p>
        `;
    }

}

function displayCurrentTravelerUpcomingTrips() {
    upcomingTripsOfCurrentTraveler.innerHTML = ``;
    if (currentTraveler.getFutureTrips(todaysDate).length > 0) {
        currentTraveler.getFutureTrips(todaysDate).forEach((trip) => {
            upcomingTripsOfCurrentTraveler.innerHTML += tripCardHTML(trip, formatDateToHumanReadableVersion(trip.date))
        })
    }

    if (currentTraveler.getFutureTrips(todaysDate).length === 0) {
        upcomingTripsOfCurrentTraveler.innerHTML = `
        <p class="empty-section-text">There are currently no upcoming trips </p>
        `;
    }
}

function displayCurrentTravelerPastTrips() {
    pastTripsOfCurrentTraveler.innerHTML = ``;
    if (currentTraveler.getPastTrips(todaysDate).length > 0) {
        currentTraveler.getPastTrips(todaysDate).forEach((trip) => {
            pastTripsOfCurrentTraveler.innerHTML += tripCardHTML(trip, formatDateToHumanReadableVersion(trip.date))
        })
    }

    if (currentTraveler.getPastTrips(todaysDate).length === 0) {
        pastTripsOfCurrentTraveler.innerHTML = `
        <p class="empty-section-text">There are currently no past trips </p>
        `;
    }
}

function createDestinationOptionSelections() {
    newTripFormDestinationsSelect.innerHTML = ``;
    allDestinations.forEach((destination) => {
        let newOption = new Option(destination.destination, destination.id)
        newTripFormDestinationsSelect.add(newOption, undefined);
    })
}

function displayNewTripFormView() {
    hideElement(createNewTripViewButton)
    hideElement(travelerTripsDisplay)
    showElement(newTripFormView)
    showElement(viewCurrentTravelerTripsDisplayButton)
    createDestinationOptionSelections()
}

function displayEstimatedCostForNewTrip() {
    if (newTripDate.value === "" || newTripDuration.value === "" || newTripDestination.value === "" || newTripNumberOfTravelers === "") {
        alert("Form must be completely filled")
    } else {
        let newTrip = new Trip(formatNewTripFormPostData(), allDestinations)
        newTripEstimatedCostDisplay.innerText = `This trip has an estimated cost of :$${newTrip.getTotalTripCost().toLocaleString("en-US")}`
    }
}

function resetEstimatedCostForNewTrip() {
    newTripEstimatedCostDisplay.innerText = ``
}

function formatNewTripFormPostData() {
    let newDate = new Date(newTripDate.value)
    let dd = String(newDate.getDate()).padStart(2, '0');
    let mm = String(newDate.getMonth() + 1).padStart(2, '0');
    let reformattedDate = `${newDate.getFullYear()}/${mm}/${dd}`
    let newTripPostData = {
        id: Number(allTrips.length + 1),
        userID: Number(currentTraveler.userID),
        destinationID: Number(newTripDestination.value),
        travelers: Number(newTripNumberOfTravelers.value),
        date: reformattedDate,
        duration: Number(newTripDuration.value),
        status: "pending",
        suggestedActivities: []
    }
    return newTripPostData
}

function formatDateToHumanReadableVersion(unreadableDate) {
    let newDate = new Date(unreadableDate)
    let dd = String(newDate.getDate()).padStart(2, '0');
    let mm = String(newDate.getMonth() + 1).padStart(2, '0');
    let reformattedDate = `${mm}/${dd}/${newDate.getFullYear()}`
    return reformattedDate
}

function postNewTrip() {
    const postData = formatNewTripFormPostData()

    return fetch("http://localhost:3001/api/v1/trips", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            let responseCode = String(response.status)[0]
            if (response.ok) {
                console.log(response.status)
                return response.json()
            } else if (responseCode === '4') {
                console.error(response)
                alert('Something went wrong, please try again.')
                throw new Error('4xx level response code error')
            } else if (responseCode === '5') {
                console.error(response)
                alert('The server is down please try again later')
                throw new Error('5xx level response code error')
            } else {
                throw new Error('Something outside of a 4xx or 5xx error happened')
            }
        })
        .then(() => {
            fetchApiCalls().then(() => {
                postDisplayCurrentTravelerTrips()
                displayCurrentTravelerTripsView()
                newTripForm.reset()
                resetEstimatedCostForNewTrip()
            })
        })
        .catch(error => {
            console.log(error)
            return alert(`Your trip was not submitted. Please try again later`)
        })
}

function displayCurrentTravelerTripsView() {
    hideElement(viewCurrentTravelerTripsDisplayButton)
    hideElement(newTripFormView)
    showElement(travelerTripsDisplay)
    showElement(createNewTripViewButton)

    hideElement(loginView)
    showElement(travelerDashboardView)
}

function getTravelerIdFromLogin() {
    let travelerID = username.value.replace('traveler', '')
    let traveler = allTravelers.find((traveler) => traveler.id === Number(travelerID))

    currentTraveler = new Traveler(traveler, allTrips)
}

function displayLoginPage() {
    showElement(loginView)
    hideElement(travelerDashboardView)
}

function validatePassword(password) {
    return password.value === 'travel' ? true : false
}

function validateUsername(username) {
    let travelerID = username.value.replace('traveler', '')
    let traveler = allTravelers.find((traveler) => traveler.id === Number(travelerID))
    if (traveler === undefined) {
        return false
    } else {
        return true
    }
}

function validateAndSubmitLogin() {
    if (validatePassword(password) && validateUsername(username)) {
        getTravelerIdFromLogin()
        displayCurrentTravelerTrips()
        displayCurrentTravelerTripsView()
        loginForm.reset()
    } else if (validatePassword(password) === false && validateUsername(username)) {
        loginErrorMessage.innerText = `wrong password`
    } else if (validatePassword(password) && validateUsername(username) === false) {
        loginErrorMessage.innerText = `wrong username`
    } else {
        loginErrorMessage.innerText = `wrong username and password`
    }
}
//event listeners here
window.addEventListener("load", fetchApiCalls())

createNewTripViewButton.addEventListener('click', (e) => {
    e.preventDefault();
    displayNewTripFormView()
})

viewCurrentTravelerTripsDisplayButton.addEventListener('click', (e) => {
    e.preventDefault()
    displayCurrentTravelerTripsView()
})

getNewTripEstimatedCostButton.addEventListener('click', (e) => {
    e.preventDefault()
    displayEstimatedCostForNewTrip()
})

newTripForm.addEventListener('submit', (e) => {
    e.preventDefault()
    postNewTrip()
})

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    validateAndSubmitLogin()
})

signOutButton.addEventListener('click', (e) => {
    e.preventDefault()
    displayLoginPage()
})
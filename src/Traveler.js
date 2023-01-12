class Traveler {
    constructor (currentTraveler, allTripsData) {
        this.tripsMasterList = allTripsData
        this.userID = currentTraveler.id
        this.name = currentTraveler.name
        this.travelerType = currentTraveler.travelerType
        this.trips = this.getFilteredTrips()
    }
    
    getFilteredTrips() {
        let filteredTrips = this.tripsMasterList.filter(trip => trip.userID === this.userID )
        return filteredTrips
    }

}

export default Traveler; 
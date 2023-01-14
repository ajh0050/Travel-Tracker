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

    getPastTrips(currentDate) {
        let pastTrips = this.trips.filter((trip) => currentDate>trip.date)
        return pastTrips
    }

    getFutureTrips(currentDate) {
        let futureTrips = this.trips.filter((trip) => currentDate<trip.date && trip.status ==="approved")
        return futureTrips   
    }

    getPendingTrips() {
        let pendingTrips = this.trips.filter((trip) => trip.status === "pending")
        return pendingTrips
    }

    getTotalAmountSpentThisYear(year) {
       let beginningYearDate = new Date (`01/01/${year}`)
       let endingYearDate = new Date (`12/31/${year}`)
       
       let tripsFromThisYear = this.trips.filter((trip) => {
        if (trip.date > beginningYearDate && trip.date<endingYearDate && trip.status ==="approved") {
            return true
        }
       })

       let sumOfTripCostsFromThisYear = tripsFromThisYear.reduce((acc,trip) => {
            acc += trip.getTotalTripCost()
            return acc
       },0)
       return sumOfTripCostsFromThisYear
    }

}

export default Traveler; 

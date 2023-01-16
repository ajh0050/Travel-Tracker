class Trip {
    constructor(tripData, destinations) {
        this.destinationsMasterList = destinations
        this.tripID = tripData.id
        this.userID = tripData.userID
        this.destinationID = tripData.destinationID
        this.numberOfTravelers = tripData.travelers
        this.date = new Date(tripData.date)
        this.numberOfDays = tripData.duration
        this.status = tripData.status
        this.suggestedActivities = tripData.suggestedActivities
        this.destination = this.matchDestination()
        this.destinationName = this.destination.destination
        this.estimatedLodgingCostPerDay = this.destination.estimatedLodgingCostPerDay
        this.estimatedFlightCostPerPerson = this.destination.estimatedFlightCostPerPerson
        this.destinationImage = this.destination.image
        this.destinationImageAltText = this.destination.alt
        this.costPerPerson = this.getCostPerPerson()
        this.totalTripCost = this.getTotalTripCost()
    }

    matchDestination() {
        let matchedDestination = this.destinationsMasterList.find((destination) => destination.id === this.destinationID)
        return matchedDestination
    }

    approveTrip() {
        this.status = "approved"
        return "This trip has been approved"
    }

    getCostPerPerson() {
        let costPerPerson = (this.estimatedLodgingCostPerDay * this.numberOfDays) + this.estimatedFlightCostPerPerson
        return Math.round(costPerPerson * 1.1)
    }

    getTotalTripCost() {
        return this.costPerPerson * this.numberOfTravelers
    }

}

export default Trip;
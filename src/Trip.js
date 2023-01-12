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
    }

    matchDestination() {
        let matchedDestination = this.destinationsMasterList.find((destination) => destination.id === this.destinationID)
        return matchedDestination
    }


}

export default Trip;
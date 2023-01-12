let tripsData = [

    {
        id: 3,
        userID: 3,
        destinationID: 22,
        travelers: 4,
        date: "2022/05/22",
        duration: 17,
        status: "approved",
        suggestedActivities: []
    },
    {
        id: 41,
        userID: 3,
        destinationID: 25,
        travelers: 3,
        date: "2020/08/30",
        duration: 11,
        status: "approved",
        suggestedActivities: []
    },
    {
        id: 37,
        userID: 49,
        destinationID: 24,
        travelers: 2,
        date: "2021/02/20",
        duration: 18,
        status: "approved",
        suggestedActivities: []
    },
    {
        id: 50,
        userID: 3,
        destinationID: 16,
        travelers: 5,
        date: "2020/07/02",
        duration: 17,
        status: "approved",
        suggestedActivities: []
    },
    {
        id: 65,
        userID: 3,
        destinationID: 35,
        travelers: 4,
        date: "2020/03/21",
        duration: 18,
        status: "pending",
        suggestedActivities: []
    }]


let destinationsData = [
    {
        id: 22,
        destination: "Rome, Italy",
        estimatedLodgingCostPerDay: 90,
        estimatedFlightCostPerPerson: 650,
        image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "people standing inside a colosseum during the day"
    },
    {
        id: 25,
        destination: "New York, New York",
        estimatedLodgingCostPerDay: 175,
        estimatedFlightCostPerPerson: 200,
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "people crossing the street during the day surrounded by tall buildings and advertisements"
    }, {
        id: 24,
        destination: "Vilnius, Lithuania",
        estimatedLodgingCostPerDay: 65,
        estimatedFlightCostPerPerson: 1100,
        image: "https://images.unsplash.com/photo-1549891472-991e6bc75d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
        alt: "overhead view of a city with a hot air balloon"
    }, {
        id: 16,
        destination: "Bangkok, Thailand",
        estimatedLodgingCostPerDay: 35,
        estimatedFlightCostPerPerson: 988,
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
        alt: "ornate buildings with a garden during the day"
    }, {
        id: 35,
        destination: "Anchorage, Alaska",
        estimatedLodgingCostPerDay: 200,
        estimatedFlightCostPerPerson: 100,
        image: "https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "man riding on kayak surrounded by mountains"
    }

]
export { tripsData, destinationsData }
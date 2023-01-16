function fetchData(dataset) {
    return fetch(`http://localhost:3001/api/v1/${dataset}`)
    .then( response => {
        if (response.ok) {
            return response.json()
          } else {
            throw new Error('The server is down, please try again later')
          }
    }
      )
    .catch(error => {
        console.log(`${dataset} had an error`, error)
        // return alert(`The server is down, please try again later`)
    })
}

export default function returnDataPromises(){
    const fetchTravelers = fetchData("travelers")
    const fetchTrips = fetchData("trips")
    const fetchDestinations = fetchData("destinations")

    return Promise.all([fetchTravelers, fetchTrips, fetchDestinations])
}
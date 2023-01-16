function fetchData(dataset) {
    return fetch(`http://localhost:3001/api/v1/${dataset}`)
    .then( response => {{
        let responseCode = String(response.status)[0]
        if (response.ok) {
            console.log(response.status)
            return response.json()
        } else if (responseCode === '4'){
            console.error(response)
            alert('Something went wrong, please try again.')
            throw new Error('4xx level response code error')
        } else if (responseCode === '5'){
            console.error(response)
            alert('The server is down please try again later')
            throw new Error('5xx level response code error')
        } else {
            throw new Error('Something outside of a 4xx or 5xx error happened')
        }
    }
    }
      )
    .catch(error => {
        console.log(`${dataset} had an error`, error)
    })
}

export default function returnDataPromises(){
    const fetchTravelers = fetchData("travelers")
    const fetchTrips = fetchData("trips")
    const fetchDestinations = fetchData("destinations")

    return Promise.all([fetchTravelers, fetchTrips, fetchDestinations])
}
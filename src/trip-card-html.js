function tripCardHTML(trip, tripDate) {
  return `
    <article class="trip-card">
          <img class="card-image" src=${trip.destinationImage} alt=${trip.destinationImageAltText} >
          <div class="card-footer-container">
            <h4 class="trip-card-label">${trip.destinationName}</h4>
            <p class="trip-card-info">
            Date: ${tripDate} <br>
            Duration: ${trip.numberOfDays.toLocaleString("en-US")} days <br>
            Travelers: ${trip.numberOfTravelers.toLocaleString("en-US")} <br>
            Total Trip Cost: $${trip.totalTripCost.toLocaleString("en-US")} <br>
            </p> 
          </div>
    </article>
    `;
}

export default tripCardHTML
function tripCardHTML(trip, tripDate) {
  return `
    <article class="trip-card">
          <img class="card-image" src=${trip.destinationImage} alt=${trip.destinationImageAltText} >
          <div class="card-footer-container">
            <h4 class="trip-card-label">${trip.destinationName}</h4>
            <p class="trip-card-info">
            Date: ${tripDate} <br>
            Duration: ${trip.numberOfDays} days <br>
            Travelers: ${trip.numberOfTravelers} <br>
            Total Trip Cost: $${trip.totalTripCost} <br>
            </p> 
          </div>
    </article>
    `;
}

export default tripCardHTML
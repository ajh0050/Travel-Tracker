import { expect } from 'chai';
import Trip from '../src/Trip';
import { tripsData, destinationsData } from './testData';

describe('Traveler class', function () {
  let trip

  beforeEach(() => {
    let currentTraveler = {
      id: 3,
      name: "Sibby Dawidowitsch",
      travelerType: "shopper"
    }

    trip = new Trip(tripsData[0], destinationsData)
  });

  it("Should be a function", () => {
    expect(Trip).to.be.a("function");
  });

  it("Should be an instance of the Traveler class", () => {
    expect(trip).to.be.an.instanceOf(Trip);
  });

  it("Should be a property to store all the destinations", () => {
    expect(trip.destinationsMasterList).to.deep.equal(destinationsData);
  });

  it("Should be a property to store tripID", () => {
    expect(trip.tripID).to.equal(3);
  });

  it("Should be a property to store user ID", () => {
    expect(trip.userID).to.equal(3);
  });

  it("Should be a property to store destination ID", () => {
    expect(trip.destinationID).to.equal(22);
  });

  it("Should be a property to store number of travelers", () => {
    expect(trip.numberOfTravelers).to.equal(4);
  });

  it("Should be a property to store the trip start date", () => {
    let testDate = new Date(tripsData[0].date)
    expect(trip.date).to.deep.equal(testDate);
  });

  it("Should be a property to store number of days the trip will last", () => {
    expect(trip.numberOfDays).to.equal(17);
  });

  it("Should be a property to store status of trip", () => {
    expect(trip.status).to.equal("approved");
  });

  it("Should be a property to store suggested actvities", () => {
    expect(trip.suggestedActivities).to.deep.equal([]);
  });

  it("Should be a property to store the matched destination for the trip", () => {
    expect(trip.destination).to.deep.equal(destinationsData[0]);
  });

  it("Should be a property to store name of the destination", () => {
    expect(trip.destinationName).to.equal("Rome, Italy");
  });

  it("Should be a property to store lodging cost per day", () => {
    expect(trip.estimatedLodgingCostPerDay).to.equal(90);
  });

  it("Should be a property to store flight cost per person", () => {
    expect(trip.estimatedFlightCostPerPerson).to.equal(650);
  });

  it("Should be a property to store url of destination image", () => {
    expect(trip.destinationImage).to.equal("https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  });

  it("Should be a property to store alt text for destination image", () => {
    expect(trip.destinationImageAltText).to.equal("people standing inside a colosseum during the day");
  });

  it("Should have a property to tell you cost per person", () => {
    expect(trip.costPerPerson).to.equal(2398);
  });

  it("Should have a property to tell you total trip cost", () => {
    expect(trip.totalTripCost).to.equal(9592);
  });
});

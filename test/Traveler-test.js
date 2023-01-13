import { expect } from 'chai';
import Traveler from '../src/Traveler';
import { tripsData,destinationsData } from './testData';
import Trip from '../src/Trip';

describe('Traveler class', function () {
  let traveler
  let instantiateTrips
  beforeEach(() => {
    let currentTraveler = {
      id: 3,
      name: "Sibby Dawidowitsch",
      travelerType: "shopper"
    }
    instantiateTrips = tripsData.map((item) => new Trip (item, destinationsData))
    traveler = new Traveler(currentTraveler, instantiateTrips)
  });

  it("Should be a function", () => {
    expect(Traveler).to.be.a("function");
  });

  it("Should be an instance of the Traveler class", () => {
    expect(traveler).to.be.an.instanceOf(Traveler);
  });

  it("Should have a property to store all of the trips", () => {
    expect(traveler.tripsMasterList).to.equal(instantiateTrips);
  });

  it("Should have a property to store userID", () => {
    expect(traveler.userID).to.equal(3);
  });

  it("Should have a property to store traveler name", () => {
    expect(traveler.name).to.equal("Sibby Dawidowitsch");
  });

  it("Should have a property to store traveler type", () => {
    expect(traveler.travelerType).to.equal("shopper");
  });

  it("Should provide a way to access all of the trips that a traveler has ever taken", () => {
    expect(traveler.trips[0]).to.deep.equal(instantiateTrips[0]);
  });

  it("Should provide a way to access trips that happened in the past", () => {
    let dateToCompare = new Date ("01/15/2021")
    expect(traveler.getPastTrips(dateToCompare)[0]).to.deep.equal(instantiateTrips[1]);
  });

  it("Should provide a way to access trips are planned for the future", () => {
    let dateToCompare = new Date ("01/15/2021")
    expect(traveler.getFutureTrips(dateToCompare)[0]).to.deep.equal(instantiateTrips[0]);
  });

  it("Should provide a way to access trips that are pending", () => {
    expect(traveler.getPendingTrips()[0]).to.deep.equal(instantiateTrips[4]);
  });

  it("Should provide a way to get the total amount spent on trips this year", () => {
    expect(traveler.getTotalAmountSpentThisYear(2022)).to.equal(9592);
    expect(traveler.getTotalAmountSpentThisYear(2020)).to.equal(31999);
  });
});

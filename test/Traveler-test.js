import { expect } from 'chai';
import Traveler from '../src/Traveler';
import { tripsData,destinationsData } from './testData';
import Trip from '../src/Trip';

describe('Traveler class', function () {
  let traveler

  beforeEach(() => {
    let currentTraveler = {
      id: 3,
      name: "Sibby Dawidowitsch",
      travelerType: "shopper"
    }
    let instantiateTrips = tripsData.map((item) => new Trip (item, destinationsData))
    traveler = new Traveler(currentTraveler, instantiateTrips)
  });

  it("Should be a function", () => {
    expect(Traveler).to.be.a("function");
  });

  it("Should be an instance of the Traveler class", () => {
    expect(traveler).to.be.an.instanceOf(Traveler);
  });

  it("Should provide a way to access all of the trips that a traveler has ever taken", () => {
    let firstItem = new Trip (tripsData[0], destinationsData)
    expect(traveler.trips[0]).to.deep.equal(firstItem);
  });

});

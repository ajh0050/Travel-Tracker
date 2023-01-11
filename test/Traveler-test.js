import { expect } from 'chai';
import Traveler from '../src/Traveler';
import { tripsData } from './testData';

describe('Traveler class', function () {
  let traveler

  beforeEach(() => {
    let currentTraveler = {
      id: 3,
      name: "Sibby Dawidowitsch",
      travelerType: "shopper"
    }

    traveler = new Traveler(currentTraveler, tripsData)
  });

  it("Should be a function", () => {
    expect(Traveler).to.be.a("function");
  });

  it("Should be an instance of the Traveler class", () => {
    expect(traveler).to.be.an.instanceOf(Traveler);
  });

  it("Should be a function", () => {
    expect(traveler.trips).to.deep.equal([
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
        status: "approved",
        suggestedActivities: []
      }]);
  });

});

class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (typeof this.distance !== 'number' || this.distance < 0) {
      throw new Error('Invalid distance for trip.');
    }
    const ratePerKm = 2; 
    return this.distance * ratePerKm;
  }
}

const driver = new Driver('Alice', 4.9, 'Toyota Prius');
const trip1 = new Trip('Downtown', 'Airport', 15);
const trip2 = new Trip('Mall', 'Stadium', -5);

try {
  console.log(`Fare for trip1: $${trip1.calculateFare()}`);
} catch (err) {
  console.error(`Trip1 Error: ${err.message}`);
}

try {
  console.log(`Fare for trip2: $${trip2.calculateFare()}`);
} catch (err) {
  console.error(`Trip2 Error: ${err.message}`);
}

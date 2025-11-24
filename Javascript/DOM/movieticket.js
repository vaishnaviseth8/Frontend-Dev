class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function() {
  console.log(`Movie: ${this.movieName}, Seat: ${this.seatNo}, Price: $${this.price}`);
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

const ticket1 = new OnlineTicket('Avengers', 'A12', 12, 2);
const ticket2 = new OnlineTicket('Inception', 'B7', 10, 1.5);

console.log(`Total Amount for ticket1: $${ticket1.getTotalAmount()}`);
console.log(`Total Amount for ticket2: $${ticket2.getTotalAmount()}`);

ticket1.printTicket();
ticket2.printTicket();

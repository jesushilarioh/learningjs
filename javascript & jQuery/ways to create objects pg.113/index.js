// Create the object, then add properties & methods

// Literal notation:
let hotel = {}

hotel.name = 'Grand Hotel';
hotel.rooms = 786;
hotel.booked = 567;
hotel.checkAvailability = function() {
    return this.rooms - this.booked;
}
console.log(hotel.checkAvailability());

// Object Constructor Notation:
let hotel2 = new Object();

hotel2.name = "Mississip Hotel";
hotel2.rooms = 700;
hotel2.booked = 678;
hotel2.checkAvailability = function() {
    return this.rooms - this.booked
}

console.log(hotel2.checkAvailability());

//Creatin an object with properties & methods
//Literal Notation:
let hotel3 = {
    name: 'Estates Hotel',
    rooms: 789,
    booked: 546,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
}

console.log(hotel3.checkAvailability());
console.log(hotel.checkAvailability() + hotel2.checkAvailability() + hotel3.checkAvailability());

// Object Constructor Notation
function hotel4(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
}

let quayHotel = new hotel4('Quay', 564, 87);
let sharpieHotel = new hotel4('Sharpie', 678, 89);
console.log(quayHotel.checkAvailability());
console.log(sharpieHotel);

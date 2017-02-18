(function() {
    'use strict';
    function Hotel(name, rooms, booked) {
        this.name = name;
        this.rooms = rooms;
        this.booked = booked;
        this.checkAvailability = function() {
            return this.rooms - this.booked;
        };
    }

    var quayHotel = new Hotel('Quay', 40, 25);
    var parkHotel = new Hotel('Park', 120, 77);

    var details1 = quayHotel.name + ' rooms: ';
        details1 += quayHotel.checkAvailability();
    var elHotel1 = document.getElementById('hotel1');
    elHotel1.textContent = details1;

    var details2 = parkHotel.name + ' rooms: ';
        details2 += parkHotel.checkAvailability();
    var elHotel2 = document.getElementById('hotel2');
    elHotel2.textContent = details2;

    // hotel is created using an object literal
    var hotel = {
        name: 'Park',
        rooms: 120,
        booked: 77
    }

    function writeHotelInfo(){
        let hotelString = hotel.name + ", " + hotel.rooms + ", " + hotel.booked;
        return hotelString;
    }

    // Debug to see if returnHotelInfo returns the hotel info
    console.log(writeHotelInfo());

    hotel.gym = true;
    hotel.pool = false;
    delete hotel.booked;

    // Declar const in individual block
    const elName = document.getElementById("hotelName"),
        elPool = document.getElementById("pool"),
        elGym = document.getElementById("gym");

    elName.textContent = hotel.name;
    elPool.className = hotel.pool;
    elGym.className = hotel.gym;
    elPool.innerHTML = "No Pool";
    elGym.innerHTML = "Yes Gym";




}());

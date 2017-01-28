// A dynamically typed language
var testString = 'Jesus';
var testNumber = 42;
testString = 32;

var  theMeaningOfLife = '42';
console.log('42' - 2);
console.log(parseInt(theMeaningOfLife, 10) + 2);

// using type of
console.log(typeof 'Jesus');
console.log(typeof 42);

var persons = [{
    firstName: 'Travis',
    lastName: 'Tidwell'
}];
// use typeof for primative variables
console.log(typeof persons);
// use instanceof for instance variables
console.log(persons instanceof Array);
console.log(persons instanceof String);

/**
 *
 * - Dynamically typed
 * - Everything is an object... even primitives
 */
console.log('Jesus'.length);

/**
 *  Patterns are just as important as Syntax.
 *
 * - http://bit.ly/1de5qfT
 * - http://bit.ly/1atTe8t
 */

// Creating objects
var person = new Object();
person.firstName = 'Jesus';
person.lastName = 'Hernandez';
console.log(person);

var ages = new Array (23, 25);
console.log(ages);

// Use JSON format when creating Objects and Arrays!
var person = {
    firstName: "Jesus",
    middleName: "Hilario",
    lastName: "Hernandez"
};
console.log(person);

var ages = [934, 89, 23];
console.log(ages);


/**
 * Objects in javascript
 *
 * - An object is an unordered collection of key-value pairs.
 */

 var person = {
     firstName: 'Jesus',
     middleName: "Hilario",
     lastName: "Hernandez",
     // creating a method within an object
     // getName is the key the function is the value.
     getName: function() {
         return ("Hello, my name is " + this.firstName + ' ' + this.middleName + ' ' + this.lastName);
     },
     address: {
         zip: 34235,
         street: "143 Main Street"
     }
 };

// Using dot notation to get the firstName of the person object
console.log("Hello, my name is " + person.firstName);
console.log(person.getName());
console.log(person);
console.log(person.getName() + " " + "I live at " + person.address.street + ". The zip code is " + person.address.zip + ". " );

/**
 * Functions in JavaScript
 *
 * - Functions are "first-class" objects.
 * - Functions can be anonymous.
 * - Functions can be "self-executing"
 * - Functions encapsulate and capture scope.
 * - Closures
 * - Module Patterns
 * - Common.JS Module Pattern
 */

// A function used as an object
var myFunction = function() {
    console.log("I have been called");
}

myFunction.firstName = 'Jesus';
console.log(myFunction);

// Using an anonymous function
setTimeout(function() {
    console.log('hello there.');
}, 1000);

// Using a self-executing function
// app.js
(function() {
    var message = 'hello there';
    setTimeout(function() {
        console.log("Hello there, again!");
    }, 3000);
})();

// vendor.js ...a downloaded file that you have no power over
if (typeof message !== 'undefined') {
    console.log("BARRFFF!!!!");
}

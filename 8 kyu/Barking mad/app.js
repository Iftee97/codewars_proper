/*

Barking mad

Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
Use method prototypes to enable all Dogs to bark.

*/

// solution:
function Dog(breed) { // constructor function
    this.breed = breed;
    this.bark = function () {
        return "Woof";
    };
}

// var snoopy = new Dog("Beagle");

// snoopy.bark = function () {
//     return "Woof";
// };

var scoobydoo = new Dog("Great Dane");
scoobydoo.bark();

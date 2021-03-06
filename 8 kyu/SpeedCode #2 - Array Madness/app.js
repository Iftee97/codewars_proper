/*

SpeedCode #2 - Array Madness

Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
Get your timer out. Are you ready? Ready, get set, GO!!!

*/

// solution:
function arrayMadness(a, b) {
    const squaresOfArrA = a.map(num => num ** 2);
    const cubesOfArrB = b.map(num => num ** 3);

    const sumOfSquaresOfArrA = squaresOfArrA.reduce((acc, currVal) => acc + currVal);
    const sumOfCubesOfArrB = cubesOfArrB.reduce((acc, currVal) => acc + currVal);

    return sumOfSquaresOfArrA > sumOfCubesOfArrB ? true : false;
}

// solution-2:
function arrayMadness(a, b) {
    const sumOfSquaresOfArrA = a.map(num => num ** 2).reduce((acc, currVal) => acc + currVal);
    const sumOfCubesOfArrB = b.map(num => num ** 3).reduce((acc, currVal) => acc + currVal);

    return sumOfSquaresOfArrA > sumOfCubesOfArrB ? true : false;
}

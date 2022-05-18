/*

Parse nice int from char problem

You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

*/

// solution:
function getAge(inputString) {
    let age = Number(inputString[0]);
    return age;
}

// solution-2:
// const getAge = (inputString) => Number(inputString[0]);

// solution-3: 
// a more sophisticated way of finding numbers (age) from a string
// this solution is implemented so that if the age is not the first character of the inputString, and instead somewhere in between, then we can extract it and return it. A possible, hypothetical edge-case
const getAge = (inputString) => {
    inputString.split(' ').forEach((word) => {
        const value = parseInt(word);
        if (!isNaN(value)) {
            age = value;
        }
    });
    return age;
};

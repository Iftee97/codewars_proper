/*

Get number from string

Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)

*/

// solution:
function getNumberFromString(s) {
    return Number(s.split('').filter(a => a <= '9' && a >= '0').join(''));
}

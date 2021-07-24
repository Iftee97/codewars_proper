/*

Is it a number?

Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:

isDigit("3")
isDigit("  3  ")
isDigit("-3.23")
should return false:

isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")

*/

// solution:
function isDigit(s) {
    if ((Number(s) == s && s % 1 == 0) || (Number(s) == s && s % 1 != 0))
        return true;
    return false;
}


// solution-2:
function isDigit(s) {
    return s == parseFloat(s);
}

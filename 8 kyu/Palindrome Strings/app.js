/*

Palindrome Strings

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples
isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false

*/

// solution:
function isPalindrome(line) {
    // return a new array of strings
    const arrayStrings = line.split("");

    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();

    // join all elements of the array into a string
    const joinArray = reverseArray.join("");

    return joinArray === line ? true : false;
}

// solution-2:
function isPalindrome(line) {
    return (line.toString() == line.toString().split('').reverse().join(''));
}

// solution-3:
const isPalindrome = line => line == line.split('').reverse().join('')

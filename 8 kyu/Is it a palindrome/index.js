/*

Is it a palindrome?

Write a function that checks if a given string (case insensitive) is a palindrome.

*/

// solution:
// using for loop
function checkPalindrome(string) {
    // convert string to all lowercase letter:
    string = string.toLowerCase();

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            console.log('It is not a palindrome');
            return false;
        }
    }
    console.log('It is a palindrome');
    return true;
}

// solution-2:
// using built-in functions
function isPalindrome(string) {
    // convert string to all lowercase letter:
    string = string.toLowerCase();

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if (string == reverseString) {
        console.log('It is a palindrome');
        return true;
    }
    else {
        console.log('It is not a palindrome');
        return false;
    }
}

// solution-3:
// one liner
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}

// solution-4:
// one-liner on steroids
const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();

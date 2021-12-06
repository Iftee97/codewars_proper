/*

Is it a palindrome?

Write a function that checks if a given string (case insensitive) is a palindrome.

*/

// solution:
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

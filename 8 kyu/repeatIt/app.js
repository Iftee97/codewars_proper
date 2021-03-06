/*

repeatIt

Create a function that takes a string and an integer (n).

The function should return a string that repeats the input string n number of times.

If anything other than a string is passed in you should return "Not a string"

Example
"Hi", 2 --> "HiHi"
1234, 5 --> "Not a string"

*/

// solution:
const repeatIt = (str, n) => {
    if (typeof str === 'number')
        return 'Not a string';
    else {
        let repeatStr = '';
        for (let i = 0; i < n; i++) {
            repeatStr += str;
        }
        return repeatStr;
    }
}

// solution-2:
const repeatIt2 = (str, n) => typeof str == 'string' ? str.repeat(n) : 'Not a string';

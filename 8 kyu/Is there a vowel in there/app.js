/*

Is there a vowel in there?

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

*/

// solution:
function isVow(a) {
    let vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    let vowelsASCIIValuesArray = vowelsArray.map(vowel => vowel.charCodeAt(0));
    let resultingArray = [];

    for (let num of a) {
        if (vowelsASCIIValuesArray.includes(num)) {
            let vowel = String.fromCharCode(num);
            resultingArray.push(vowel);
        } else {
            resultingArray.push(num);
        }
    }
    return resultingArray;
}

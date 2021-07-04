/*

Return Two Highest Values in List

In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []

*/

// solution:
function twoHighest(arr) {
    if (arr.length == 0 || arr == []) return [];
    if (arr.length == 1) return arr;

    arr = new Set(arr); // convert to set to remove duplicates
    arr = [...arr]; // convert back to array to apply array methods
    const arrToReturn = []; // array we want to return 
    let max = Math.max(...arr); // first max value
    let newArr = arr.filter(num => num !== max); // remove the first max value to get hold of the second max value
    let newMax = Math.max(...newArr); // second max value
    arrToReturn.push(max, newMax); // pushing to new array
    return arrToReturn; // return new array;
}

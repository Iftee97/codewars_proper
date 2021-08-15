/*

Sum Mixed Array

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/

// solution:
function sumMix(x) {
    let sum = 0;
    for (let num of x) {
        sum += Number(num);
    }
    return sum;
}

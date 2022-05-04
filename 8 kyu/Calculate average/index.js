/*

Calculate average

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/


// --------------------------------------------------------------------


// solution:
function find_average(array) {
    // your code here
    let sum = 0;
    let average = 0;

    if (array.length === 0) {
        return average = 0;
    } else {
        for (let num of array) {
            sum += num;
        }
        return average = sum / array.length;
    }
}

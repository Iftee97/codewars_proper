/*

Sum of differences in array

Your task is to sum the differences between consecutive pairs in the array in descending order.

For example:

[2, 1, 10]  ->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0.

*/

// solution:
function sumOfDifferences(arr) {
    let sum = 0;
    const descArr = arr.sort((a, b) => b - a);
    const diffsArr = [];

    for (let i = 0; i < descArr.length - 1; i++) {
        diffsArr.push(descArr[i] - descArr[i + 1]);
    }

    for (let num of diffsArr) {
        sum += num;
    }

    return sum;
}

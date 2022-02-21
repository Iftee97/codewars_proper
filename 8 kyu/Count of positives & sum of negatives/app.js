/*

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

// solution-1:
function countPositivesSumNegatives(arr) {
    let arrayToReturn = [];
    let sumOfNegatives = 0;
    let countOfPostives = 0;

    if (arr == undefined || arr.length == 0 || arr == null) {
        return [];
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            countOfPostives += 1;
        } else {
            sumOfNegatives += arr[i];
        }
    }
    arrayToReturn.push(countOfPostives, sumOfNegatives);
    return arrayToReturn;
}

// solution-2:
function countPositivesSumNegatives(input) {
    var newArr = [];
    var positiveNumber = 0;
    var negativeNumber = 0;

    // Validate Input
    if (input === null || input.length === 0)
        return newArr;

    // Loop through array of Numbers 
    for (var i = 0; i < input.length; i++) {
        if (input[i] == 0)
            continue;

        // Count positives
        else if (input[i] > 0)
            positiveNumber++;

        // Sum negatives
        else if (input[i] < 0)
            negativeNumber += input[i];

    }

    // Prepare Output
    newArr.push(positiveNumber, negativeNumber);
    return newArr;
}
/*

Invert values

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.

*/

// solution:
function invert(array) {
    if (array.length == 0 || array == [])
        return [];
    else {
        const arrayToReturn = [];
        for (let num of array) {
            if (num < 0) {
                num = Math.abs(num);
            } else {
                num = -num;
            }
            arrayToReturn.push(num);
        }
        return arrayToReturn;
    }
}

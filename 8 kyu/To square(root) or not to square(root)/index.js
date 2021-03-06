/*

To square(root) or not to square(root)


Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example:
[4,3,9,7,2,1] -> [2,9,3,49,4,1]

Notes:
The input array will always contain only positive numbers, and will never be empty or null.

*/


// --------------------------------------------------------------------


// solution:
function squareOrSquareRoot(array) {
    const newArray = [];
    for (let num of array) {
        if (num > 0 && Math.sqrt(num) % 1 === 0) {
            newArray.push(Math.sqrt(num));
        } else {
            newArray.push(num ** 2);
        }
    }
    return newArray;
}


// --------------------------------------------------------------------


// solution-2:
const squareOrSquareRoot = array => array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));

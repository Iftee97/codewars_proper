/*

Removing Elements

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

*/

// solution: to push on 2022-05-18
function removeEveryOther(arr) {
    return arr.filter((element, index) => index % 2 === 0);
}


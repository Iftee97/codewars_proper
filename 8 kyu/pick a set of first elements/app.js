/*

pick a set of first elements

Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

If n == 0 return an empty sequence []

Examples:
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];

*/

// solution:
function first(arr, n) {
    if (n === 0)
        return [];
    if (n == null)
        return [arr[0]];
    return arr.slice(0, n);
}

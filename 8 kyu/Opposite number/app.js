/*

Opposite number

Very simple, given an integer or a floating-point number, find its opposite.

Examples:
1: -1
14: -14
-34: 34

*/

// solution 1:
function opposite(number) {
  return number > 0 ? -number : Math.abs(number)
}

// solution 2:
function opposite(number) {
  return (-number)
}

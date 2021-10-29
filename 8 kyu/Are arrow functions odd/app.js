/*

Are arrow functions odd?

Time to test your basic knowledge in functions! Return the odds from a list:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []

*/

// solution:
const odds = (values) => {
    return values.filter(num => num % 2 !== 0);
}

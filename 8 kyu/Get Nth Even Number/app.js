/*

Get Nth Even Number

Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466

The input will not be 0.

*/

// solution:
function nthEven(n) {
    let firstTerm = 0;
    let commonDifference = 2;
    let nthEvenNumber = firstTerm + (n - 1) * commonDifference;
    return nthEvenNumber;
}

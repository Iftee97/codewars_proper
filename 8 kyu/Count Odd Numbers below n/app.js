/*

Count Odd Numbers below n

Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
* 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
* 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

Expect large Inputs!

*/

// solution:
function oddCount(n) {
    let oddCount = 0;
    for (let i = 1; i < n; i++) {
        if (i % 2 !== 0) {
            oddCount += 1;
        }
    }
    return oddCount;
}

// solution-2:
const oddCount = n => Math.floor(n / 2);

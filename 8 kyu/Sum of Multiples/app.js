/*

Sum of Multiples

Your Job
Find the sum of all multiples of integer below limit

Keep in Mind
integer and limit are natural numbers (positive integers)
limit is excluded from the multiples

Examples:
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"

*/

// solution:
function sumMul(integer, limit) {
    const result = [];
    if (limit > 0) {
        for (let i = integer; i < limit; i += integer) {
            result.push(i);
        }
        return result.reduce((acc, currVal) => acc + currVal);
    } else {
        return 'INVALID';
    }
}

// solution-2:
function sumMul(n, m) {
    if (n >= m) return "INVALID";

    var sum = 0;
    for (var i = n; i < m; i += n) {
        sum += i;
    }
    return sum;
}

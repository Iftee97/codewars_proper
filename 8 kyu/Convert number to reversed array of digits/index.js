/*

Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]

*/

// solution:
function digitize(n) {
    //code here
    if (n.length === 1) {
        return [n];
    } else {
        const stringifiedNum = String(n);
        const stringifiedNumArr = stringifiedNum.split('');
        const reveredStringifiedNumArr = stringifiedNumArr.reverse();
        const numsArr = [];
        reveredStringifiedNumArr.forEach(num => numsArr.push(Number(num)));
        return numsArr;
    }
}

// solution-2:
function digitize(n) {
    return String(n).split('').map(Number).reverse()
}
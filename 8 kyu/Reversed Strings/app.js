/*

Reversed Strings

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/

// solution:
function solution(str) {
    let strArr = str.split('');
    let reverseStrArr = strArr.reverse();
    let reverseStr = reverseStrArr.join('');
    return reverseStr;
}

// solution-2:
function solution(str) {
    return str.split('').reverse().join('');
}

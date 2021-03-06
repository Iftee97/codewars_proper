/*

String repeat

Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

*/


// --------------------------------------------------------------------


// solution
function repeatStr(n, s) {
    let returnStr = "";
    for (let i = 0; i < n; i++) {
        returnStr += s;
    }
    return returnStr;
}


// --------------------------------------------------------------------


// solution-2:
function repeatStr(n, s) {
    return s.repeat(n);
}

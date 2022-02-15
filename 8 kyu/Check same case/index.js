/*

Check same case

Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0

Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

*/

// solution:
function sameCase(a, b) {
    if (!(a.toUpperCase() != a.toLowerCase()) || !(b.toUpperCase() != b.toLowerCase())) {
        return -1;
    } else if ((a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 90) && (b.charCodeAt(0) >= 65 && b.charCodeAt(0) <= 90)) {
        // a and b both uppercase
        return 1;
    } else if ((a.charCodeAt(0) >= 97 && a.charCodeAt(0) <= 122) && (b.charCodeAt(0) >= 97 && b.charCodeAt(0) <= 122)) {
        // a and b both lowercase
        return 1;
    } else {
        return 0;
    }
}

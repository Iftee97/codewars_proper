/*

Vowel remover

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

don't worry about uppercase vowels

*/

// solution:
function shortcut(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    string = string.split('');
    return string.filter(str => !vowels.includes(str)).join('');
}

/*

Remove String Spaces

Simple, remove the spaces from the string, then return the resultant string.

*/


// --------------------------------------------------------------------


// try-1
function noSpace(x) {
    return x.replace(/\s/g, '');
}

// try-2
function noSpace(x) {
    return x.split(' ').join('');
}
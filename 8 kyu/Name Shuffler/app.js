/*

Name Shuffler:


Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"

*/

// solution:
function nameShuffler(str) {
    let nameArr = str.split(' ');
    let [firstName, lastName] = nameArr;
    let shuffledName = lastName + ' ' + firstName;
    return shuffledName;
}

// solution-2:
function nameSuffle(str) {
    return str.split(' ').reverse().join(' ')
}

// solution-3:
const nameShuffler = str => str.split(' ').reverse().join(' ');


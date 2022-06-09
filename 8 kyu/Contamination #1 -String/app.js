/*

Contamination #1 -String-

An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example
text before = "abc"
character   = "z"
text after  = "zzz"

*/


// solution 1:
function contamination(text, char) {
  let strToReturn = '';
  if (text === '' || char === '') {
    return ''
  }
  for (let _ of text) {
    strToReturn += char;
  }
  return strToReturn;
}

// solution 2:
function contaminationTwo(text, char) {
  if (text === '' || char === '') {
    return ''
  }
  return text.split('').map(() => char).join('');
}

// solution 3:
function contamination(text, char) {
  return char.repeat(text.length)
}

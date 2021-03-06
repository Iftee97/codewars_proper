/*

Be Concise I - The Ternary Operator

You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and does the following:

If the age is 12 or lower, it return "You're a(n) kid"
If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
If the age is 65 or above, it return "You're a(n) elderly"
Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

*/

// solution:
// function describeAge(age) {
//   if (age <= 12) return "You're a(n) kid"
//   else if (age <= 17) return "You're a(n) teenager"
//   else if (age <= 64) return "You're a(n) adult"
//   else return "You're a(n) elderly"
// }

// solution-2:
const describeAge = a => (a <= 12) ? "You're a(n) kid" : (a <= 17) ? "You're a(n) teenager" : (a <= 64) ? "You're a(n) adult" : "You're a(n) elderly"

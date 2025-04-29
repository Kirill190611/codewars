//Task: In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.
//
// The order is: uppercase letters, lowercase letters, numbers and special characters.
//
// "*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]
// More examples in the test cases.
//
// Good luck!

//Solution:
const solve = s => [/[A-Z]/g, /[a-z]/g, /[0-9]/g, /[^a-zA-Z0-9]/g].map(el => (s.match(el) || []).length)
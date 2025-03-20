//Task: Description:
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
//
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

//Solution:
const getMiddle = (s, length = s.length) => length % 2 === 0
    ? s.slice(Math.floor(length / 2) - 1, Math.ceil(length / 2) + 1)
    : s.slice(Math.floor(length / 2), Math.ceil(length / 2))
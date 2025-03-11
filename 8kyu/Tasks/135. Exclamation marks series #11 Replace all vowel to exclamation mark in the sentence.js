//T: Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
//
// Examples
// "Hi!" --> "H!!"
// "!Hi! Hi!" --> "!H!! H!!"
// "aeiou" --> "!!!!!"
// "ABCDE" --> "!BCD!"

//S:
const replace = s => s.replace(/[aeiouAEIOU]/g, "!")
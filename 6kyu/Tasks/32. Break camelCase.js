//Task: Complete the solution so that the function will break up camel casing, using a space between words.
//
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//Solution:
const solution = string => [...string].map(el => el === el.toUpperCase() ? ' ' + el : el).join('')
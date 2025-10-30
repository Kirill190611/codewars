//Task: Write a function that:
//
// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.

//Solution:
const isIntArray = arr => {
    return Array.isArray(arr) && arr.every(x => Math.floor(x) === x)
}
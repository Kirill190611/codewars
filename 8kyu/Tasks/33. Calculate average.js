//T: Write a function which calculates the average of the numbers in a given array.
//
// Note: Empty arrays should return 0.

//S:
const findAverage = array => {
    if (array.length === 0) return 0;
    return array.reduce((acc, el) => acc + el, 0) / array.length
}
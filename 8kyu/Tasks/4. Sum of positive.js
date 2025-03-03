//T: You get an array of numbers, return the sum of all of the positives ones.
//
// Example
// [1, -4, 7, 12] =>
// 1
// +
// 7
// +
// 12
// =
// 20
// 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.

//S:
const positiveSum = arr => arr.reduce((acc, el) => el > 0 ? acc + el : acc + 0, 0)
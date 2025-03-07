//T: Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
// Return your answer as a number.

//S:
const sumMix = x => x.map(el => typeof el === 'string' ? Number(el) : el).reduce((x, y) => x + y)
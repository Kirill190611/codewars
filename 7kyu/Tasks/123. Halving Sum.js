//Task: Task
// Given a positive integer n, calculate the following sum:
//
// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.
//
// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

//Solution:
const halvingSum = n => n >= 1 ? n + Math.floor(halvingSum(n / 2)) : n

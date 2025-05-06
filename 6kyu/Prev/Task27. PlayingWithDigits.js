//Task: Some numbers have funny properties. Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.
//
// In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :
//
// (
// a
// p
// +
// b
// p
// +
// 1
// +
// c
// p
// +
// 2
// +
// d
// p
// +
// 3
// +
// .
// .
// .
// )
// =
// n
// ∗
// k
// (a
// p
//  +b
// p+1
//  +c
// p+2
//  +d
// p+3
//  +...)=n∗k
// If it is the case we will return k, if not return -1.
//
// Note: n and p will always be strictly positive integers.


//Solution:
function digPow(n, p){
    let arr = n.toString().split("").map(Number)
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]**(p + i)
    }

    if (sum === Math.pow(n, p)) {
        return p
    } else if (sum % n === 0) {
        return sum / n;
    } else {
        return -1
    }
}
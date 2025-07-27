//Task: In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula
//
// (
// n
// k
// )
// =
// n
// !
// k
// !
// (
// n
// −
// k
// )
// !
// (
// k
// n
// ​
//  )=
// k!(n−k)!
// n!
// ​
//
// where n denotes a row of the triangle, and k is a position of a term in the row.
//
// Pascal's Triangle
//
// You can read Wikipedia article on Pascal's Triangle for more information.
//
// Task
// Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.
//
// Example:
// n = 1: [1]
// n = 2: [1,  1, 1]
// n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
// Note
// Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on selected method of calculations, intermediate values can be larger.

//Solution:
const pascalsTriangle = n => {
    if (n === 1) {
        return [1]
    }
    let prev = pascalsTriangle(n - 1)
    let len = prev.length;
    prev.push(1);
    for (let i = len - n + 1; i < len - 1; i ++) {
        prev.push(prev[i] + prev[i + 1]);
    }
    prev.push(1);
    return prev;
}
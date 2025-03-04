//Task: Given an array of integers, return a new array with each value doubled.
//
// For example:
//
// [1, 2, 3] --> [2, 4, 6]
//
// FUNDAMENTALSARRAYS


//Solution:
function maps(x){
    let a = [];
    for (let i = 0; i < x.length; i++) {
        a.push(x[i]*2)
    }
    return a;
}
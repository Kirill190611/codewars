//Task: Write a function that given an integer n >= 0, returns an array of n ascending length subarrays, all filled with 1s.
//
// 0 => [ ]
// 1 => [ [1] ]
// 2 => [ [1], [1, 1] ]
// 3 => [ [1], [1, 1], [1, 1, 1] ]

//Solution:
const pyramid = n => {
    let result = []
    let s = []
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            s.push(1);
        }
        result.push(s);
        s = [];
    }
    return result;
}
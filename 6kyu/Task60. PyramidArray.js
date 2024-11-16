//Task: Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
//
// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s


//Solution:
function pyramid(n) {
    let res = [];
    let s = [];

    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= i; j++) {
            s.push(1);
        }
        res.push(s);
        s = [];
    }
    return res;
}
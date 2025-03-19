//Task: Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter). You will need to figure out the rule of the series to complete this.
//
// Rules
// You need to round the answer to 2 decimal places and return it as String.
//
// If the given value is 0 then it should return "0.00".
//
// You will only be given Natural Numbers as arguments.


//Solution:
function SeriesSum(n) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        result = result + 1 / (1 + i * 3)
    }
    return result.toFixed(2);
}
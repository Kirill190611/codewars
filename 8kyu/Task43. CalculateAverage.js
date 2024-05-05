//Task: Write a function which calculates the average of the numbers in a given list.
//
// Note: Empty arrays should return 0.


//Solution:
function findAverage(array) {
    // your code here
    let sum = 0;
    if (array.length === 0) {
        return 0
    } else {
        for (let i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
        return sum / array.length
    }
}
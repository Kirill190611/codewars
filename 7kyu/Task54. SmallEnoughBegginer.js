//Task: You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
//
// You can assume all values in the array are numbers.


//Solution:
function smallEnough(a, limit){
    let result;
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= limit) {
            result = true;
        } else {
            result = false;
            break;
        }
    }
    return result
}
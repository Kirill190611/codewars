//Task: Write a small function that returns the values of an array that are not odd.
//
// All values in the array will be integers. Return the good values in the order they are given.


//Solution:
function noOdds( values ){
    /*let result = [];
    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 === 0) {
            result.push(values[i])
        }
    }
    return result*/

    return values.filter(el => el % 2 === 0);
}
//Task: Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
//
// If the array is invalid (empty, or contains negative integers or integers with more than 1 digit), return nil (or your language's equivalent).
//
// Examples
// Valid arrays
//
// [4, 3, 2, 5] would return [4, 3, 2, 6] (4325 + 1 = 4326)
// [1, 2, 3, 9] would return [1, 2, 4, 0] (1239 + 1 = 1240)
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0] (9999 + 1 = 10000)
// [0, 1, 3, 7] would return [0, 1, 3, 8] (0137 + 1 = 0138)
// Invalid arrays
//
// [] is invalid because it is empty
// [1, -9] is invalid because -9 is not a non-negative integer
// [1, 2, 33] is invalid because 33 is not a single-digit integer

//Solution:
const upArray = arr => {
    if (arr.length === 0) {
        return null
    }
    let carry = 1
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > 9 || arr[i] < 0) {
            return null
        }
        if (carry > 0) {
            arr[i] = arr[i] + carry
            carry = Math.floor(arr[i] / 10)
            arr[i] = arr[i] % 10
        }
    }
    if (carry > 0) {
        arr.unshift(carry)
    }
    return arr
}
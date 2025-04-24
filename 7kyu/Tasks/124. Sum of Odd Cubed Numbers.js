//Task: Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

//Solution:
const cubeOdd = arr => {
    let sum = 0;
    let arrFiltered = arr.filter(el => el % 2 !== 0)
    for (let i = 0; i < arrFiltered.length; i++) {
        if (typeof arrFiltered[i] === 'number') {
            sum = sum + Math.pow(arrFiltered[i], 3)
        } else {
            sum = undefined
            break
        }
    }
    return sum
}
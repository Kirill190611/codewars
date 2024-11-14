//Task: Your task, is to create N×N multiplication table, of size provided in parameter.
//
// For example, when given size is 3:
//
// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:
//
// [[1,2,3],[2,4,6],[3,6,9]]


//Solution:
const getArrayOfNumbers = (number, multiplier) => {
    const result = []

    for (let i = 1; i <= number; i++) {
        result.push(i * multiplier)
    }

    return result
}

const multiplicationTable = size => {
    const arrayWrapper = Array(size).fill([])

    const resultArray = arrayWrapper.map((subArray, index) => {
        return getArrayOfNumbers(size, index + 1)
    })

    return resultArray
}

//Решение было найдено в интернете
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
const getNumArr = (number, mult) => {
    const result = []
    for (let i = 1; i <= number; i++) {
        result.push(i * mult)
    }
    return result
}

const multiplicationTable = size => {
    const data = Array(size).fill([])
    const result = data.map((subArr, index) => {
        return getNumArr(size, index + 1)
    })
    return result
}

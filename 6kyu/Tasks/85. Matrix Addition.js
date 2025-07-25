//Task: Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size N x N (square), containing only integers.
//
// How to sum two matrices:
//
// Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell from the second matrix. This will be cell [n][m] of the solution matrix. (Except for C where solution matrix will be a 1d pseudo-multidimensional array).
//
// Visualization:
//
// |1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
// |3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
// |1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|
// Example
// matrixAddition(
//   [ [1, 2, 3],
//     [3, 2, 1],
//     [1, 1, 1] ],
// //      +
//   [ [2, 2, 1],
//     [3, 2, 3],
//     [1, 1, 3] ] )
//
// // returns:
//   [ [3, 4, 4],
//     [6, 4, 4],
//     [2, 2, 4] ]

//Solution:
const flatArray = array => array.reduce((a, b) => a.concat(b))

const chunkArray = (array, chunkSize) => {
    const arrayChunked = []

    while (array.length) {
        arrayChunked.push(array.splice(0, chunkSize))
    }

    return arrayChunked
}

const matrixAddition = (matrixA, matrixB) => {
    const matrixAFlatted = flatArray(matrixA)
    const matrixBFlatted = flatArray(matrixB)

    const sumOfFlattedArrays = matrixAFlatted.map((number, index) => {
        return number + matrixBFlatted[index]
    })

    return chunkArray(sumOfFlattedArrays, matrixA.length)
}
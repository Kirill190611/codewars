//Task: Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//
// Mind the input validation.

//Solution:

function sumArray(array) {
    if (!array) return 0;
    if (array.length < 3) return 0;
    const sortedArr = array.sort((a, b) => a - b);
    return sortedArr.slice(1, -1).reduce((t, c) => t + c)
}
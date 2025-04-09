//Task: Complete the method which accepts an array of integers, and returns one of the following:
//
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

//Solution:
const isSortedAndHow = array => {
    const sortedAscendingArr = [...array].sort((a, b) => a - b).join('')
    const sortedDescendingArr = [...array].sort((a, b) => b - a).join('')

    return array.join('') === sortedAscendingArr
        ? "yes, ascending"
        : array.join('') === sortedDescendingArr
            ? 'yes, descending'
            : 'no'
}
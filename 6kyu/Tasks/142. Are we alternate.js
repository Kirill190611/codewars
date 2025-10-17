//Task: Create a function that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.
//
// Examples
// "amazon" --> true
// "apple" --> false
// "banana" --> true
// Note
// Arguments consist of only lowercase letters.

//Solution:
const isAlt = word => {
    const result = [...word].map((el) => word.indexOf(el.match(/[aeiou]/)))
    const evenArr = []
    const oddArr = []

    for (let i = 0; i < result.length; i++) {
        if (i % 2 === 0) {
            evenArr.push(result[i])
        }
        else {
            oddArr.push(result[i])
        }
    }
    return (
        (oddArr.every((el) => el === -1) && evenArr.every((el) => el !== -1)) ||
        (oddArr.every((el) => el !== -1) && evenArr.every((el) => el === -1))
    )
}
//Task: The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//
// What if the string is empty? Then the result should be empty object literal, {}.

//Solution:
const count = string => {
    if (string.length === 0) {
        return {}
    }
    let result = {}
    for (let char of string) {
        if (result[char]) {
            result[char] = result[char] + 1
        } else {
            result[char] = 1
        }
    }
    return result
}
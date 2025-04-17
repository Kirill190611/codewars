//Task: Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
//
// (the dedicated builtin(s) functionalities are deactivated)

//Solution:
const reverse = array => {
    const result = []
    for (let i = 1; i <= array.length; i++) {
        result.push(array[array.length - i])
    }
    return result
}
//T: Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//S:
const repeatStr = (n, s) => {
    let result = '';
    for (let i = 0; i < n; i++) {
        result = result + s
    }
    return result
}
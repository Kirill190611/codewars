//Task: Your job is to create a calculator which evaluates expressions in Reverse Polish notation.
//
// For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.
//
// For your convenience, the input is formatted such that a space is provided between every token.
//
// Empty expression should evaluate to 0.
//
// Valid operations are +, -, *, /.
//
// You may assume that there won't be exceptional situations (like stack underflow or division by zero).

//Solution:
const calc = expr => {
    const result = []
    let elements = expr.split(/\s+/)
    for (let i = 0; i < elements.length; i++) {
        switch(elements[i]) {
            case '+': result.push(result.pop() + result.pop()); break;
            case '-': result.push(-result.pop() + result.pop()); break;
            case '*': result.push(result.pop() * result.pop()); break;
            case '/': result.push(1 / (result.pop() / result.pop())); break;
            default: result.push(parseFloat(elements[i]))
        }
    }
    return result.pop() || 0
}
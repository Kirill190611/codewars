//Task: Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.
//
// chained([a,b,c,d])(input)
// Should yield the same result as
//
// d(c(b(a(input))))

//Solution:
const chained = fns => arg => {
    let t = arg
    for (let i = 0; i < fns.length; i++) {
        t = fns[i](t)
    }
    return t
}
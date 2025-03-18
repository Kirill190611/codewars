//T: Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
//
// Graph
//
// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

//S:
const squareArea = A => {
    let r = (A * 4) / (2 * Math.PI)
    let s = Math.pow(r, 2)
    return +s.toFixed(2)
}
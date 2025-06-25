//Task: Create a parser to interpret and execute the Deadfish language.
//
// Deadfish operates on a single value in memory, which is initially set to 0.
//
// It uses four single-character commands:
//
// i: Increment the value
// d: Decrement the value
// s: Square the value
// o: Output the value to a result array
// All other instructions are no-ops and have no effect.
//
// Examples
// Program "iiisdoso" should return numbers [8, 64].
// Program "iiisdosodddddiso" should return numbers [8, 64, 3600].

//Solution:
const parse = data => {
    let currentVal = 0;
    let result = []

    data.split('').forEach(x => {
        if (x === 'i') {
            currentVal = currentVal + 1
        }
        if (x === 'd') {
            currentVal = currentVal - 1
        }
        if (x === 's') {
            currentVal = Math.pow(currentVal, 2)
        }
        if (x === 'o') {
            result.push(currentVal)
        }
    })
    return result
}

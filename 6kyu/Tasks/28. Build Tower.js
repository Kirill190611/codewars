//Task: Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//
// For example, a tower with 3 floors looks like this:
//
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

//Solution:
const towerBuilder = nFloors => {
    let stars, space;
    let result = []
    for (let i = 1; i <= nFloors; i++) {
        space = ' '.repeat(nFloors - i)
        stars = '*'.repeat((2 * i) - 1)
        result.push(`${space}${stars}${space}`)
    }
    return result
}
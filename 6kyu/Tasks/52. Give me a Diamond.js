//Task: Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
//
// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
//
// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
//
// Examples
// A size 3 diamond:
//
//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"
//
// A size 5 diamond:
//
//   *
//  ***
// *****
//  ***
//   *
// ...that is:
//
// "  *\n ***\n*****\n ***\n  *\n"

//Solution:
const diamond = n => {
    if (n < 0 || n % 2 === 0) {
        return null
    }
    let diamond = ''
    for (let i = 0; i < n; i++) {
        let stars = n - Math.abs(n - 2 * i - 1)
        let spaces = (n - stars) / 2
        while (spaces-- > 0) {
            diamond = diamond + ' '
        }
        while (stars-- > 0) {
            diamond = diamond + '*'
        }
        diamond = diamond +'\n'
    }
    return diamond;
}
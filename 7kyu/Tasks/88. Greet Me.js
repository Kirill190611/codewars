//Task: Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
//
// Example:
//
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

//Solution:
const greet = name => {
    name = [...name].map((el, index) => index === 0 ? el.toUpperCase() : el.toLowerCase()).join('')
    return `Hello ${name}!`
}
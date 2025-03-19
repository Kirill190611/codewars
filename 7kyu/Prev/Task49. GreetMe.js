//Task: Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
//
// Example:
//
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"


//Solution:
var greet = function(name) {
    name = name.toLowerCase().split("");
    let greetingName = [];

    for (let i = 0; i < name.length; i++) {
        if (i === 0) {
            greetingName.push(name[i].toUpperCase())
        } else {
            greetingName.push(name[i])
        }
    }

    return `Hello ${greetingName.join("")}!`
};
//Task: This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
//
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));


//Solution:
function executeValue (callback, value) {
    return typeof callback === 'function' ? callback(value) : value
}

function zero(callback) {
    const value = 0;
    return executeValue(callback, value);
}
function one(callback) {
    const value = 1;
    return executeValue(callback, value);
}
function two(callback) {
    const value = 2;
    return executeValue(callback, value);
}
function three(callback) {
    const value = 3;
    return executeValue(callback, value);
}
function four(callback) {
    const value = 4;
    return executeValue(callback, value);
}
function five(callback) {
    const value = 5;
    return executeValue(callback, value);
}
function six(callback) {
    const value = 6;
    return executeValue(callback, value);
}
function seven(callback) {
    const value = 7;
    return executeValue(callback, value);
}
function eight(callback) {
    const value = 8;
    return executeValue(callback, value);
}
function nine(callback) {
    const value = 9;
    return executeValue(callback, value);
}

function plus(a) {
    return function(b) {
        return a + b
    }
}
function minus(a) {
    return function(b) {
        return b - a
    }
}
function times(a) {
    return function(b) {
        return a * b
    }
}
function dividedBy(a) {
    return function(b) {
        return Math.floor(b / a)
    }
}
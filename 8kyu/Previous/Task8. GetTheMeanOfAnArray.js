//Task: It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//
// Return the average of the given array rounded down to its nearest integer.
//
// The array will never be empty.

//Solution:

function getAverage(marks){
    let ttl = 0;
    let qty = 0;
    for (let i = 0; i < marks.length; i++) {
        ttl = ttl + marks[i];
        qty = qty + 1;
    }

    return Math.floor(ttl / qty)
    //TODO : calculate the downward rounded average of the marks array
}
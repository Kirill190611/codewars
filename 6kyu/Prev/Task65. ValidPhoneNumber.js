//Task: Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.
//
// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)
//
// Examples:
//
// "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false


//Solution:
function validPhoneNumber(phoneNumber){
    for (let i = 0; i < phoneNumber.length ; i++) {
        let char = phoneNumber[i];
        if (!Number(char)) {
            if (i === 0 && char !== "(") {
                return false;
            }
            else if (i === 4 && char !== ")") {
                return false;
            }
            else if (i === 5 && char !== " ") {
                return false;
            }
            else if (i === 9 && char !== "-") {
                return false;
            }
        }
    }
    return phoneNumber.length === 14;
}

/*
function validPhoneNumber(phoneNumber){
    return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
}*/

//Решение взято из интернета, тк сам задачу решить не смог
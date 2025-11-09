//Task: Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?
//
// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".
//
// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

//Solution:
const balance = (left, right) => {
    let lleft = 0;
    let rright = 0;
    for (let i = 0; i < left.length; i++) {
        if (left[i] === '!') {
            lleft++
            lleft++
        } else if (left[i] === '?') {
            lleft++
            lleft++
            lleft++
        }
    }
    for (let j = 0; j < right.length; j++) {
        if (right[j] === '!') {
            rright++
            rright++
        } else if (right[j] === '?') {
            rright++
            rright++
            rright++
        }
    }
    if (lleft > rright) {
        return "Left"
    } if (lleft < rright) {
        return "Right"
    } else return "Balance"
}
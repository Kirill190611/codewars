//Task: Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
//
// Example:
//
// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'


//Solution:
function switcheroo(x){
    let result = "";

    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'a') {
            result = result + 'b';
        } else if (x[i] === 'b') {
            result = result + 'a'
        } else {
            result = result + x[i]
        }
    }
    return result
}
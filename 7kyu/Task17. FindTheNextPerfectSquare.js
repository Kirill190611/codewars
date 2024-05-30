//Task: You might know some pretty large perfect squares. But what about the NEXT one?
//
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//
// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
//
// Examples:(Input --> Output)
//
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square


//Solution:
function findNextSquare(sq) {
    let number;
    let nextNumber;

    if (Math.sqrt(sq) % 1 === 0) {
        number = Math.sqrt(sq)
        nextNumber = number + 1;
    } else {
        return -1;
    }
    return nextNumber * nextNumber;
}
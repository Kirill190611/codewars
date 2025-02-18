//Task: Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).
//
// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.
//
// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50
// * With input "10.0.0.0", "10.0.1.0"   => return  256
// * With input "20.0.0.10", "20.0.1.0"  => return  246


//Solution:
const ipsBetween = (start, end) => {
    const result = (n, m = 1) => (end.split(`.`)[n] - start.split(`.`)[n]) * m;

    return result(0, 256 * 256 * 256) + result(1, 256 * 256) + result(2, 256) + result(3)
}
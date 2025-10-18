//Task: Given a string, remove any characters that are unique from the string.
//
// Example:
//
// input: "abccdefee"
//
// output: "cceee"

//Solution:
const onlyDuplicates = str => {
    const obj = [...str].reduce((acc, el) => (
            {
                ...acc, [el]: (acc[el] || 0) + 1
            }),
        {}
    );
    return [...str].reduce((acc, el) => {
        return obj[el] > 1 ? (acc = acc + el) : (acc = acc + '');
    }, '');
}
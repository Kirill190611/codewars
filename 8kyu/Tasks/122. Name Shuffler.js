//T: Write a function that returns a string in which firstname is swapped with last name.
//
// Example(Input --> Output)
//
// "john McClane" --> "McClane john"

//S:
const nameShuffler = str => str.split(' ').reverse().join(' ')
//Task: Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


//Solution:
const moveZeros = arr => {
  if (arr[0] === 0) {
    arr.push(arr.splice(i, 1).pop())
  }
  for (var i = arr.length; i > 0; i--) {
    if (arr[i] === 0) {
      arr.push(arr.splice(i, 1).pop())
    }
  }
  return arr;
}
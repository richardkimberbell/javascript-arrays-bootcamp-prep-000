var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr,elem) {
  return [elem,...arr]
}
function destructivelyAddElementToBeginningOfArray(arr,elem) {
   arr[0] = elem
  return arr
}
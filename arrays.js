var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr,elem) {
  return [elem,...arr]
}
function destructivelyAddElementToBeginningOfArray(arr,elem) {
   arr = [elem,...arr]
  return arr
}
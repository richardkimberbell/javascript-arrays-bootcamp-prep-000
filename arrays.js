var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr,elem) {
  return [elem,...arr]
}
function destructivelyAddElementToBeginningOfArray(arr,elem) {
  var newarr = [...arr]
  newarr[0] = elem
  return newarr
}
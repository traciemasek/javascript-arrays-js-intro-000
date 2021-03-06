var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var addElementToBeginningOfArray = (arr, element) => {
  var newArr = [element, ...arr];
  return newArr;
}

var destructivelyAddElementToBeginningOfArray = (arr, element) => {
  arr.unshift(element); 
  return arr;
}

var addElementToEndOfArray = (arr, element) => {
  var newArr = [ ...arr, element];
  return newArr;
}

var destructivelyAddElementToEndOfArray = (arr, element) => {
  arr.push(element); 
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1)
}
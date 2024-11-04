//ques1
function addElement(arr, value) {
    arr.push(value);
    return arr;
}
console.log(addElement([1, 2, 3], 4));

//ques2
function removeLastElement(arr) {
    return arr.pop();
}
console.log(removeLastElement([1, 2, 3]));

//ques3
function removeFirstElement(arr) {
    return arr.shift();
}
console.log(removeFirstElement([1, 2, 3]));

//ques4
function addElementToStart(arr, value) {
    arr.unshift(value);
    return arr;
}
console.log(addElementToStart([2, 3], 1));

//ques5
function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray([1, 2, 3]));

//ques6
function sortArray(arr) {
    return arr.sort();
}
console.log(sortArray(["banana", "apple", "cherry"]));

//ques7
function findIndex(arr, value) {
    return arr.indexOf(value);
}
console.log(findIndex([1, 2, 3], 2));
console.log(findIndex([1, 2, 3], 4));

//ques8
function sliceArray(arr, start, end) {
    return arr.slice(start, end + 1);
}
console.log(sliceArray([1, 2, 3, 4, 5], 1, 3));

//ques9
function modifyArray(arr, start, deleteCount, ...newElements) {
    arr.splice(start, deleteCount, ...newElements);
    return arr;
}
console.log(modifyArray([1, 2, 3, 4], 1, 2, "a", "b"));
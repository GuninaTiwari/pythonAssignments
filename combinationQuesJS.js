//ques1
function sortStrings(arr) {
    return arr.map(str => str.toLowerCase()).sort();
}
console.log(sortStrings(["Banana", "apple", "Cherry"]));

//ques2
function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");
}
console.log(reverseWords("hello world"));

//ques3
function filterAndSortEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).sort((a, b) => a - b);
}
console.log(filterAndSortEvenNumbers([5, 2, 8, 1, 4]));

//ques4
function uppercaseWords(sentence) {
    return sentence.split(" ").map(word => word.toUpperCase()).join(" ");
}
console.log(uppercaseWords("hello world"));

//ques5
function trimAndUppercase(str) {
    return str.trim().toUpperCase();
}
console.log(trimAndUppercase("  hello world  "));
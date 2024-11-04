//ques1
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//ques2
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(5));
console.log(checkSign(-3));
console.log(checkSign(0));

//ques3
function convertToUppercaseArray(arr) {
    return arr.map(str => str.toUpperCase());
}
console.log(convertToUppercaseArray(["hello", "world"]));

//ques4
function generateRange(start, end) {
    const range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}
console.log(generateRange(1, 5));

//ques5
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));








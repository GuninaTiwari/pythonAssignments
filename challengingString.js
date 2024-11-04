//ques1
function countVowels(str6) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str6) {
        if (vowels.includes(char)) count++;
    }
    return count;
}
console.log(countVowels("Hello World"));

//ques2
function findLongestWord(str7) {
    let words = str7.split(" ");
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) longest = word;
    }
    return longest;
}
console.log(findLongestWord("Hello World this is sentence"));

//ques3
function toTitleCase(str8) {
    let words = str8.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
console.log(toTitleCase("hello conversion of titile case using javaScript"));

//ques4
function removeDuplicates(str9) {
    let result = "";
    for (let char of str9) {
        if (!result.includes(char)) result += char;
    }
    return result;
}
console.log(removeDuplicates("hello"));

//ques5
function isAnagram(str10, str11) {
    let sortStr = (s) => s.split("").sort().join("");
    return sortStr(str10) === sortStr(str11);
}
console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));
//ques1
function extractDigits(str12) {
    let result = [];
    for (let char of str12) {
        if (char >= "0" && char <= "9") result.push(char);
    }
    return result;
}
console.log(extractDigits("This is my number 9283746374"));

//ques2
function isValidEmail(str13) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str13);
}
console.log(isValidEmail("mymail@gmail.com")); 
console.log(isValidEmail("mail.co"));

//ques3
function removeVowels(str14) {
    let result = "";
    for (let char of str14) {
        if (!"aeiouAEIOU".includes(char)) result += char;
    }
    return result;
}
console.log(removeVowels("Remove vowels"));

//ques4
function countWordOccurrences(str15, word) {
    let words = str15.split(" ");
    let count = 0;
    for (let w of words) {
        if (w === word) count++;
    }
    return count;
}
console.log(countWordOccurrences("Count the word count in this sentence", "count"));

//ques5
function capitalizeSentences(str16) {
    let result = "";
    let capitalize = true;
    for (let char of str16) {
        if (capitalize && char !== " ") {
            result += char.toUpperCase();
            capitalize = false;
        } else {
            result += char;
        }
        if (char === "." & char === "!" &  char === "?") capitalize = true;
    }
    return result;
}
console.log(capitalizeSentences("this is a sentence.  hello world. "));
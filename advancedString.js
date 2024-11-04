//ques1
function reverseString(str1) {
    let result = "";
    for (let i = str1.length - 1; i >= 0; i--) {
        result += str1[i];
    }
    return result;
}
console.log(reverseString("hello"));

//ques2
function wordCount(str2) {
    let count = 0;
    let inWord = false;
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] !== " ") {
            if (!inWord) {
                count++;
                inWord = true;
            }
        } else {
            inWord = false;
        }
    }
    return count;
}
console.log(wordCount("Count the words in this sentence."));

//ques3
function isPalindrome(str3) {
    let left = 0, right = str3.length - 1;
    while (left < right) {
        if (str3[left] !== str3[right]) return false;
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello"));

//ques4
function charFrequency(str4) {
    let freq = {};
    for (let char of str4) {
        if (freq[char]) freq[char]++;
        else freq[char] = 1;
    }
    return freq;
}
console.log(charFrequency("character"));

//ques5
function truncateString(str5, num) {
    return str5.length > num ? str5.slice(0, num) + "..." : str5;
}
console.log(truncateString("Hello World this is a code to turncate", 10));
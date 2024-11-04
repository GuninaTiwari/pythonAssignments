

//ques1
function caesarCipher(str17, shift) {
    let result = "";
    for (let char of str17) {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            result += String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else {
            result += char;
        }
    }
    return result;
}
console.log(caesarCipher("hello", 2));

//ques2
function removeExtraSpaces(str18) {
    let result = "";
    let space = false;
    for (let char of str18) {
        if (char !== " ") {
            result += char;
            space = false;
        } else if (!space) {
            result += char;
            space = true;
        }
    }
    return result.trim();
}
console.log(removeExtraSpaces("   This  has    extra spaces.   "));

//ques3
function maskString(str19, visibleCount) {
    let masked = "";
    for (let i = 0; i < str19.length - visibleCount; i++) {
        masked += "*";
    }
    return masked + str19.slice(-visibleCount);
}
console.log(maskString("Maskedstring", 4));

//ques4
function findCommonPrefix(arr) {
    let prefix = arr[0];
    for (let i = 1; i < arr.length; i++) {
        while (!arr[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}
console.log(findCommonPrefix(["flower", "flow", "flight"]));

//ques5
function sortWords(str20) {
    let words = str20.split(" ");
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words.length - i - 1; j++) {
            if (words[j] > words[j + 1]) {
                let temp = words[j];
                words[j] = words[j + 1];
                words[j + 1] = temp;
            }
        }
    }
    return words.join(" ");
}
console.log(sortWords("hello world i am coding in js"));
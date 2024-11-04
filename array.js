//ques6
function findPairsWithSum(num1, targetSum) {
    let pairs = [];
    let seen = {};

    for (let i = 0; i < num1.length; i++) {
        let complement = targetSum - num1[i];
        if (seen[complement]) {
            pairs.push([complement, num1[i]]);
        }
        seen[num1[i]] = true;
    }

    return pairs;
}
console.log(findPairsWithSum([1, 2, 3, 4, 5], 5));

//ques7
function sortByFrequency(num1) {
    let frequency = {};
    let result = [];

    for (let i = 0; i < num1.length; i++) {
        frequency[num1[i]] = (frequency[num1[i]] || 0) + 1;
    }

    for (let key in frequency) {
        result.push({ value: key, count: frequency[key] });
    }

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {
            if (result[j].count < result[j + 1].count) {
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }

    let sortedArray = [];
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].count; j++) {
            sortedArray.push(Number(result[i].value));
        }
    }

    return sortedArray;
}
console.log(sortByFrequency([1, 1, 2, 2, 2, 3, 3, 4]));

//ques8
function generateSubarrays(num1) {
    let subarrays = [];
    for (let i = 0; i < num1.length; i++) {
        for (let j = i; j < num1.length; j++) {
            let subarray = [];
            for (let k = i; k <= j; k++) {
                subarray.push(num1[k]);
            }
            subarrays.push(subarray);
        }
    }
    return subarrays;
}
console.log(generateSubarrays([1, 2, 3]));

//ques9
function partitionArray(num1, pivot) {
    let left = [];
    let right = [];
    let equal = [];

    for (let i = 0; i < num1.length; i++) {
        if (num1[i] < pivot) {
            left.push(num1[i]);
        } else if (num1[i] > pivot) {
            right.push(num1[i]);
        } else {
            equal.push(num1[i]);
        }
    }

    return [...left, ...equal, ...right];
}
console.log(partitionArray([3, 5, 8, 2, 1, 4], 4));

//ques10
function productExceptSelf(num2) {
    let result = [];
    let n = num2.length;

    let prefixProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefixProduct;
        prefixProduct *= num2[i];
    }

    let suffixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffixProduct;
        suffixProduct *= num2[i];
    }

    return result;
}
console.log(productExceptSelf([1, 2, 3, 4]));
//ques1
function getMax(arr){
    let max = arr[0]
    for(let i = 1; i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max   
}
let arr = [2,4,5,3,7,4]
console.log(getMax(arr))

//ques2
function getMin(arra){
    let min = arra[0]
    for(let i = 1; i< arra.length; i++){
        if(arra[i] < min){
            min = arra[i]
        }
    }
    return min    
}
let arra = [2,4,5,3,7,4]
console.log(getMin(arra))

//ques3
function getSum(ar){
    let sum = 0
    for(let i = 1; i< ar.length; i++){
       sum += ar[i]
    }
    return sum    
}
let ar = [2,4,5,3,7,4]
console.log(getSum(ar))

//ques4
function getSum(nums){
    let sum = 0
    for(let i = 1; i< nums.length; i++){
       sum += nums[i]
    }
    return sum
    
}
function getAvg(nums){
    let avg = 0;
    let sum = getSum(nums);
    return sum/nums.length
}
let nums = [2,4,5,3,7,4]
console.log(getAvg(nums))

//ques5
function removeDuplicates(numss){
    return[...new Set(numss)];
}
let numss = [1,2,2,3,4,4]
console.log(removeDuplicates(numss))

//ques6
function reverseArray(numbs){
    let reverse = [];
    for(let i = numbs.length - 1 ; i>=0; i--){
        reverse.push(numbs[i])
    }
    return reverse
}
let numbs = [1,2,3,4,5]
console.log(reverseArray(numbs))

//ques7
function mergeAndSort(num1, num2){
    let mergeArr = num1.concat(num2);
    
    mergeArr.sort()
    return mergeArr
}
let nums1 = [3,2,5]
let nums2 = [2,1,3]
console.log(mergeAndSort(nums1,nums2))

//ques8
function getIntersect(num1, num2){
    let intersectArr = [];
    for(let i = 0; i< num1.length; i++){
        for(let j = 0; j < num2.length; j++){
            if(num1[i] === num2[j]){
                intersectArr.push(num1[i]);
            }
        }
    }
    return intersectArr
}
let numms1 = [3,2,5]
let numms2 = [2,1,3]
console.log(getIntersect(nums1,nums2))

//ques9
function frequency(num1){
    let count = {};
    for(let i = 0; i< num1.length; i++){
        if(count[num1[i]] === undefined){
            count[num1[i]] = 1
        }
        else{
            count[num1[i]] += 1;
        }
    }
    return count
    
}
let no1 = [3,2,5,3,4,5,3,2]
console.log(frequency(no1))

//ques10
function unique(num1){
    let count = {};
    let unique = [];
    
    for(let i = 0; i< num1.length; i++){
        if(count[num1[i]] === undefined){
            count[num1[i]] = 1
        }
        else{
            count[num1[i]] += 1;
        }
    }
    
    for(let i = 0; i< num1.length; i++){
        if(count[num1[i]] === 1){
            unique.push(num1[i])
        }
    }
    return unique
    
}
let nus1 = [1,2,3,3,4,4,5]
console.log(unique(nus1))
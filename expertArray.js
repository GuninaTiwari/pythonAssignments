//ques1
function moveZero(num1){
    let result = [];
    let count = 0;
    
    for(let i = 0; i< num1.length; i++){
        if(num1[i] === 0){
            count++;
        }
        else{
            result.push(num1[i]);
        }
    }
    
    for(let i = 0; i< count; i++){
        result.push(0);
    }
   return result
}
let nums1 = [1,0,2,0,3,0,4]
console.log(moveZero(nums1))

// //ques2
function rotateArr(num1 , steps){
    let n = num1.length;
    steps = steps % n;
    let rotate = [];
    
    for(let i = 0; i<n; i++){
        rotate[(i + steps) % n] = num1[i];
    }
    return rotate
}
let nos1 = [1,2,3,4,5]
console.log(rotateArr(nos1,6))

//ques3
function chunkArr(num1 , step){
    let result =[];
    for(let i = 0; i < num1.length; i += step){
        let chunk = [];
        for(let j = i; j< i+ step && j < num1.length; j++){
            chunk.push(num1[j]);
        }
        result.push(chunk);
    }
    return result
}

let num1 = [1,2,3,4,5,6,7]
console.log(chunkArr(num1,2))

//ques4
function flattenArray(num1){
    let result =[];
    
    function flatten(num){
        if(Array.isArray(num)){
            for(let i = 0; i < num.length; i++){
                flatten(num[i]);
            }
        }
        else{
            result.push(num);
        }
    }
    
    flatten(num1)
    return result;
}

let nu1 = [[1, 2],[3, 4, [5, 6]]]
console.log(flattenArray(nu1))

//ques5
function longestSeq(num1){
    let numSet = new Set(num1);
    let longest = 0;
    
    for(let num of numSet){
        if(!numSet.has(num-1)){
            let currentNum = num;
            let currentSeq = 1;
            
            while(numSet.has(currentNum + 1)){
                currentNum++;
                currentSeq++;
            }
            longest = Math.max(longest,currentSeq)
        }
    }
 return longest       
}

let nm1 = [1,6,2,6,5,4]
console.log(longestSeq(nm1))
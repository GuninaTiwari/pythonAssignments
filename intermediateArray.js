//ques1
let animals = ["Cat","Tiger","Dog"];
animals.push("Lion");
animals.shift();
console.log(animals)

//ques2
let color1 = ["red","blue"];
let color2 = ["green","yellow"];
let colorconcat = color1.concat(color2);
console.log(colorconcat)

//ques3
let number =[1,2,3,4,5];
number.forEach(number => console.log(number*2));

//ques4
let numbr =[1,2,3,4,5];
console.log(numbr.includes(3));

//ques5
let nuber =[1,2,3,4,5];
let arr = nuber.slice(-3)
console.log(arr)

//ques6
let name =["smith","joy","alice","james"];
name.splice(2,1)
console.log(name)
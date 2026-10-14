//3. Modifying Arrays
//splice() 

//syntax
//let arr =[start index ,delete index ,add value]
//Adds, removes, or replaces elements.

let colors = ["Red", "Green", "Blue"];

//add ===> add new value in providex index place 

 colors.splice(1,0,"Pink")
 console.log(colors)//[ 'Red', 'Pink', 'Green', 'Blue' ]

 //removes ===> remove elemt from starting number till count num
 let rem=colors.splice(1,2)
 console.log(rem)//[ 'Pink', 'Green' ]
 console.log(colors)//[ 'Red', 'Blue' ]


//Replace===>replace new record with existing using starting index
let colo = ["Red", "Green", "Blue","white"];
 colo.splice(1, 2, "Yellow");

console.log(colo);
// ["Red", "Yellow", "Blue"]


//slice===>Returns a portion of an array without changing the original.

let nums = [10, 20, 30, 40, 50];
//syntax=(first index , last index)--- not provide last index value shows before that value
console.log(nums.slice(1, 4));
// [20, 30, 40]


let logs=["fail","defect","open","closed","closedQA","defered"]

let newlogs=logs.slice(2,5)
console.log(newlogs)
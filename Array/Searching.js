//4. Searching
//indexOf()
let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.indexOf("Banana"));
// 1





//lastIndexOf()
let arr = [1, 2, 3, 2,4,2];

console.log(arr.lastIndexOf(2));
// 3





//includes()
console.log(fruits.includes("Apple"));
// true





//find()
let numbers = [5, 10, 15, 20];

let result = numbers.find(num => num > 10);

console.log(result);
// 15





//findIndex()
let index = numbers.findIndex(num => num > 10);

console.log(index);
// 2
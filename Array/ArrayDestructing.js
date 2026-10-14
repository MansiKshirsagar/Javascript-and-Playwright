
//Array destructuring is a feature that lets you extract values from an array and assign them to variables in a single statement.
let arr=[10,20,50,43,85]



//basic destructing

let arr1 = [10, 20, 30];

let [a, b, c] = arr1;

console.log(a);
console.log(b);
console.log(c);

//Skip Elements
let arr2 = [10, 20, 30, 40];

let [a1, , c1] = arr2;

console.log(a1);
console.log(c1);

//Rest Operator (...)
let [x,y,z,...rest]=arr
console.log(x)
console.log(y)
console.log(z)
console.log(rest)

//Default Values

let arr3 = [10];

let [a2, b2= 20] = arr3;

console.log(a2);
console.log(b2);
// console.log("5"-3)
// console.log("5"+3)
// console.log("5"*"3")
// console.log("hello"-3)
// let a=null;
// console.log(typeof a);
// console.log(1+2+"3")
// console.log(1+"2"+3)


// function test() {
// var x = 10;

// if (true) {
// x = 20; 
// console.log("Inside if:", x);
// }

// console.log("Outside if:", x);
// }
// test();

// console.log(2 ** 3);
// console.log(10 / 0);
// console.log(-10 / 0);
// console.log(0 / 0);

let firstname="Mansi";
let lastname="Kshirsagar";
let age=29;
let city="mumbai";

console.log(`My name is ${firstname} ${lastname} I am ${age} years old and I live in ${city}`);
console.log("My name is " + firstname + " "+lastname +" I am "+age+" years old and I live in "+city);

//Write a JavaScript program to swap two numbers without using a third variable
let a=2;
let b=3;

//  a=b;//a=3
//  b=a-1//b=2

a=a+b;//5
b=a-b;//5-3//2
a=a-b//5-2//3

console.log(a)
console.log(b)
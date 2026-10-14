//revesre string

let string="AUTOMATION"

let lastindex=string.length-1
let reversed=""

for(let i=lastindex;i>=0;i--)
{
    console.log(reversed)
reversed=reversed+string[i]
}

//reverse char

for(let i=lastindex;i>=0;i--)
{
    console.log(string[i])
}

//largest number in array

let char=[10,50,75,80,90]

let largest=char[0]

for(let i=1;i<=char.length;i++)
{
    if (char[i]>largest)
        largest=char[i]
}
console.log(largest)

//factorial
let num=5

let factorial=1
for (let i=1;i<=num;i++)
{
    factorial = factorial*i
    console.log("factorial of 5 is ="+ factorial)
}

//odd number

for(let i=1;i<=10;i+=2)
{
    console.log(i)
}

//even number

for(let i=2;i<=10;i+=2)
{
    console.log(i)
}
//leap year

// divided by 4 and 400 but not divisible by 100 adn =0
let year=2024
let leapyear= year%4===0 || year %400===0 && year%100!==0 ?"leap year":"not leap year"
console.log(leapyear)

//break
for(let i=1;i<=10;i++)
{
    if(i===3)
        break
    console.log(i)
}

//continue

for(let i=1;i<=10;i++)
{
    if(i===3)
       continue
    console.log(i)
}
/*

Q6. Write a program to check if a person is eligible to vote (age >= 18).
Q7. Write a program that takes marks (0–100) and prints the grade:

- 90–100 → A
- 80–89 → B
- 70–79 → C
- 60–69 → D
- Below 60 → Fail */
//Q5. Write a program that takes a number and checks whether it is positive, negative, or zero.

let number="jhjh"
/*if(number>0)
{
    console.log("number is Positive")
}
else if(number<0)
{
    console.log("number is Negative")
}
else if(number==0)
{
    console.log("number is zero")
}
else{
    console.log("Number is not valid")
}*/

let pnz= number>0 ? "Number is positive": number<0 ? "Number is Negative": number==0 ? "Number is zero" : "not a valid number"
console.log(pnz)

//Q6. Write a program to check if a person is eligible to vote (age >= 18).

let age=18

if (age>=18)
{
    console.log("person is eligible to vote")
}
else{
    console.log("person is not eligible")
}

let eligibility=age>=18 ?"person is eligible for vote": "not eligible for viote"
console.log(eligibility)


let rs=289

let divide=rs/2
console.log(divide)

/*Q7. Write a program that takes marks (0–100) and prints the grade:

- 90–100 → A
- 80–89 → B
- 70–79 → C
- 60–69 → D
- Below 60 → Fail */

let score=50
//if else if else
if(score>=90)
{
console.log("GradeA");
}
else if(score>=80)
{
console.log("GradeB");
}
else if(score>=70)
{
console.log("GradeC");
}
else if(score>=60)
{
console.log("GradeD");
}
 else
{
console.log("fail");
}
//Q10. Write a program using switch...case that takes a day number (1–7) and prints the day name (1
//= Monday, 7 = Sunday).
let day=7
switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;
    case 7:
        console.log("sunday")
        break;
    default:
        break;
}

//Q12. Write a program using switch...case to create a simple calculator 
// that takes two numbers and an operator (+, -, *, /) and prints the result.
let num1=10
let num2=20
let oprator="+"
switch (oprator) {
    case "+":
        console.log("Result= ", num1+num2)
        break;
    case "-":
        console.log("Result= " ,num1-num2)
        break;
    case "*":
        console.log("Result= " ,num1*num2)
        break;
    case "%":
        console.log("Result= " ,num1%num2)
        break;        
    default:
        break;
}


/*//reveerse number 

function reverseNumber(num) {
    let reverse = 0;

    for (; num > 0; num = Math.floor(num / 10)) {
        reverse = reverse * 10 + (num % 10);
    }

    return reverse;
}

console.log(reverseNumber(9876)); // 6789



function reverseNumber(num) {
    let number = 12345;
    let reverse = 0;
    
    while (num > 0) {
        let digit = num % 10;              // Get the last digit
        reverse = reverse * 10 + digit;   // Append the digit
        num = Math.floor(num / 10);       // Remove the last digit
    }

    return reverse;
}

// Example

console.log(reverseNumber(number)); // Output: 54321



let num = 12345;
let reverse = 0;

while (num > 0) {
    let digit = num % 10;              // Get last digit
    reverse = reverse * 10 + digit;   // Build reversed number
    num = Math.floor(num / 10);        // Remove last digit
}

console.log(reverse); // Output: 54321*/






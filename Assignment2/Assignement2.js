//Q15. Write a program to print numbers from 1 to 20 using a for loop.

for (let i = 1; i <= 20; i++) {
    console.log(i)
}
console.log("------------------------------")
//Q16. Write a program to print all even numbers from 1 to 50.

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
   
}
//Write a program to find the sum of all numbers from 1 to 100 using a for loop

let sum=0

for(let i=1; i<=100; i++)
{
    sum=sum+i
}
console.log(sum)

//Write a program to print the multiplication table of a given number (e.g., 7).
console.log("------------------------------")
let num=7

for(let j=1; j<=10;j++)
{
  table=num*(j);
  console.log("7 * " +j+ "=" +table)
}



for(let i=1;i<=10;i++)
{
    table=2*(i);
    console.log(`2*`+i+"="+table)
}

//Q19. Write a program to find the factorial of a given number using a for loop. (Example: 5! = 120)

let factorial=1

for (let i=1; i<=5; i++)
{
    factorial =factorial * (i)
    console.log(factorial)
}

//Q20. Write a program to reverse a number using a loop. (Example: 12345 → 54321)
function reversenum(number)
{
    let reverse=""
    while(number>0)
    {
        let digit=number%10
        reverse=reverse * 10 + digit
        number=Math.floor(number/10)
    }
    console.log(reverse)
}

reversenum(12345)


let number=12345
let reverse=""
while(number>0)
{
    let digit= number%10
    reverse=reverse * 10 + digit
    number=Math.floor(number/10)
}
//console.log(reverse)




let i=10;

while(i>=1)
{
    console.log(i)
      i--
}

//Q22. Write a program using a while loop to find the sum of digits of a number. (Example: 1234 → 1+2+3+4 = 10)

let sum1 =0
for(let i=1 ; i<=5; i++)
{
sum1= sum1+(i)
}
console.log(sum1)

//Q23. Write a program to check if a number is a palindrome using a while loop. (Example: 121 → Palindrome, 123 → Not Palindrome)


let onenum=121

while(onenum>0)
{
let reverse=""
 let digit=onenum%10
    reverse= reverse * 10+digit
    onenum=Math.floor(onenum/10)
}
console.log(reverse)



for (let i = 1; i <= 5; i++) {
   let line = ""
   for (let j = 1; j <=i; j++){
      line+=j+" ";
   }
   //console.log(line)
}


// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


for (let i = 5; i >= 1; i--) {
let line = ""
for (let j = 1; j <=i; j++){
line+="* "
}
console.log(line)
}



for (let i = 1; i <= 10; i++){
if (i === 5) 
    {
    break;
}

console.log(i);
}


for (let i = 1; i <= 10; i++) {
if (i % 3 === 0) {
continue;
}

console.log(i);
}

let i = 1;

while (i <= 5) 
    { 
  console.log(i);
}
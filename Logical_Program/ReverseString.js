function reversestring(str)
{
let reverse=""
 for(let i=str.length-1;i>=0; i--)
 {
reverse=reverse+ str[i]
 }
 console.log("Reverse string is "+reverse)
}

 reversestring("AUTOMATION")


 //reverse num

let num=12345
let reverse=""

while(num>0)
{
 let digit=num%10
 reverse=reverse * 10 +digit
 num =Math.floor(num/10)
 
}
console.log(reverse)

//reverse char

let string="mansi"
for (let i=string.length-1; i>=0 ;i--)
{
console.log(string[i])
}


//5 star

let row=5

for(let i=1 ;i<=5 ;i++)
{
let line=""
for(let j=1; j<=5; j++)
{
  line+="* "
}
console.log(line)
}
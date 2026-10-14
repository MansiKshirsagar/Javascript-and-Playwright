let number=12345
reverse=""

while(number>0)
{
    
    let digit=number%10 //extracts the last digit
    reverse=reverse*10+digit //appends the digit to the reversed number.
    number=Math.floor(number/10) //removes the last digit from the original number

}
console.log(reverse)
 console.log("---------------------------")

//reverse string
function reversestring(string)
{
   
    let reverse=""

    for(let i=string.length-1;i>=0;i--)
    {
        reverse=reverse+string[i]
    }
    console.log(reverse)
}
reversestring("playwright")
console.log("---------------------------")

//reverse number

function reversenum(num){

let reverse=""
while(num>0)
{
    let digit=num%10
    reverse=reverse*10 + digit
    num=Math.floor(num/10)
}
  console.log(reverse)
}

reversenum(123456)
console.log("---------------------------")

//factorial

function factoriall(num)
{
let factorial=1
for (let i=1;i<=5;i++){
    factorial=factorial*[i]
}
console.log(factorial)
}


factoriall(5)

console.log("---------------------------")



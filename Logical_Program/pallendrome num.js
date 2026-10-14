//number is pellendrome or not


let num=131
temp=num
let reverse=0

while(num>0)
{
    let digit=num%10
    reverse=reverse *10+digit
    num=Math.floor(num/10)
}
console.log(reverse)

if(temp==reverse)
{
    console.log(`${temp} is pellendrome`)
}
else{
    console.log(`${temp} is not pellendrome`)
}

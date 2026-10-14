//number is amstrong or not

// let num=154
// let sum=0
// let original=num


// while(num>0)

//     {
// let digit= num%10//last num
// sum=sum+ digit*digit*digit
// num=Math.floor(num/10)
//     }
// console.log(sum)

// if (sum=== original)
// {
//     console.log(`${original} is Armstrong number`)
// }
// else{
//       console.log(`${original} is  not Armstrong number`)
// }



let num=370
let sum=0
let orignal= num

while(num>0)
{
  let digit=num%10
  sum=sum+digit*digit*digit
  num=Math.floor(num/10)
}
console.log(sum)


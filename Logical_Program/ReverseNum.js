//  function reverseNum(num)
//  {
//     let reverse=""
// while(num>0)
//  {
//     let digit=num%10
//    reverse=reverse * 10 +digit
//    num=Math.floor(num/10)
// }
// console.log("reverse number is = "+reverse)
//  }
//  reverseNum(4853)




let onenum = 121
let reverse = ""
while (onenum > 0) {

   //  let digit=onenum%10
   //     reverse= reverse * 10+digit
   //     onenum=Math.floor(onenum/10)


   // }
   //   console.log(reverse)
   //     if(reverse === onenum)
   //     {
   // console.log("num is pellendrome")
   //     }
   //     else{
   // console.log("num is not pellendrome")
}


if (onenum > 0) {
   let digit = onenum % 10
   reverse = reverse * 10 + digit
   onenum = Math.floor(onenum / 10)
   reverse === onenum
   console.log("num is pellendrome")
}
else {
   console.log("num is not pellendrome")
}




/**
* *
* * *
* * * *
* * * * **/



for (let i = 1; i <= 5; i++) {
   let line = ""
   for (let j = 1; j <= 5; j++)
      line("* ")
}
console.log(line)

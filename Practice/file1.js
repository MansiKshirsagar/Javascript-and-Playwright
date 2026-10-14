
// let orignal="TRADEBULLS"
// let reverse=""

// for(let i=orignal.length-1;i>=0; i--)
// {
// reverse= reverse+orignal[i]

// }
// console.log(reverse)

// //pellendrome num
// let num=1331
// let temp=num
// let reversee=""

// while(num>0)
// {
// let digit= num%10
// reversee=reversee *10 + digit
// num= Math.floor(num/10)

// }
// console.log(num)

// if(reversee==temp)
// {
// console.log("number is pellendrome")
// }
// else
// {
// console.log("not pellendrome")
// }


// // ///string pellendrome

// let stringg="madamk"
// let reverse1=""

// for(let i=stringg.length-1;i>=0; i--)
// {
// reverse1= reverse1 + stringg[i]
// }
// console.log(reverse1)

// if(reverse1=== stringg)
// {
// console.log("string is pellendrome")
// }
// else
// {
// console.log("not pellendrome")
// }


// //largets number in array

// let arr =[10,50,12,60,11]
//  let largest= arr[0]
// for(let i=1; i<=arr.length;i++)
// {

//        if(arr[i]>largest)
// 	   {
// 	   largest=arr[i]}
	   

//     }
// console.log("large num in array is = "+ largest)


// function oddeven(numm)
// {

// if(numm/2==0)
// {
// console.log("number is even")
// }
// else
// {
// console.log("number is odd")
// }

// }
// oddeven(25)

// // addition of 12345

// let nuum=5555
// let sum=0
// while(nuum>0)
// {
//  let digit= nuum%10
//  sum=sum+digit
//  nuum=Math.floor(nuum/10)
//  }
//  console.log(sum)


//  //post increment
//  let count=5

// //  console.log(count++)//5
// //  console.log(count)//6

//  //pre increment

//  console.log(count)
//  console.log(++count)
//  console.log(count)


let newarr=[1,5,2,4,5,2,6,1]
let duplicate=[]
for(let i=0;i<=newarr.length-1;i++)
{
    for(let j=i+1; j<=newarr.length-1;j++)
    {
if (newarr[i]==newarr[j])

    {
        duplicate.push(newarr[i])
        
    }
    }
}
console.log(duplicate)

// for(let i=0;i<=newarr.length-1;i++){

//     if(!duplicate.includes(newarr[i]))
//     {
//         duplicate.push(newarr[i])
//     }
// }
// console.log(duplicate)
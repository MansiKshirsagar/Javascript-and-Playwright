let arr=[1,1,2,2,3,3,4,4]

// let uniq=[]

// for(let i=0; i<=arr.length-1;i++)
// {
   
//     for (let j=1+i;j<=arr.length-1;j++)
//     {
// if(arr[i]==arr[j])
// uniq.push(arr[i])

//     }
// }
// console.log(uniq)


//2

let uniq = [...new Set(arr)];

console.log(uniq);
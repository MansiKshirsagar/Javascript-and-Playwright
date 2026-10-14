let arr=[5,3,8,1,9,2]

// let max=0

// for(let i=0; i<=arr.length-1;i++)
// {
//     for(j=i+1;j<=arr.length-1;j++)
//     {
//         if(arr[i]>arr[j])
//         {
//             max=arr[i]
//         }
//     }
// }
// console.log(max)

function max(mannum)
{
    let maximum=Math.max(...mannum)
    console.log(maximum)
}
max([5,3,8,1,9,2])
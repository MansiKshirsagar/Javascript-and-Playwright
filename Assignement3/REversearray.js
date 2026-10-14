//let arr=[1, 2, 3, 4, 5]
let reversearr=[]

function reverse(arr)
{
    for (let i=arr.length-1;i>=0;i--)
    {
          reversearr.push(arr[i])
    }  
    console.log(reversearr)
}
reverse([1, 2, 3, 4, 5])

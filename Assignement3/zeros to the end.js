let arr=[0, 1, 0, 3, 12, 0, 5, 0]
let zero=[]


for(let i=0;i<=arr.length-1;i++)
{
    if(arr[i]===0)
    {
       zero.push(arr[i])
    }
    else{
        zero.unshift(arr[i])
    }
}
    console.log(zero)

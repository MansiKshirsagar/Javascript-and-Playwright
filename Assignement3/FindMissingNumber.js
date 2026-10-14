let arr=[1, 2, 3, 5, 6, 7, 8]
 let missing=0
for(let i=0;i<=arr.length-1;i++)
{
    if(arr[i]!==i+1)
    {
         missing= i+1
        break;
    }
    
}
console.log(missing)
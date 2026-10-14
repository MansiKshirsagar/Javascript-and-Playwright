let arr=[10,50,85,90,100]

let largest=arr[0]

for (let i=0;i<=arr.length-1;i++)
{
    if(arr[i]>largest)
    {
        largest=arr[i]
    }
}
console.log(largest)
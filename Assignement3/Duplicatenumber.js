
let arr=[1, 2, 3, 2, 4, 5, 3, 6, 1, 7, 5]
let dup=[]

for(let i=0; i<=arr.length-1;i++)
{
   
    for (let j=1+i;j<=arr.length-1;j++)
    {
        if(arr[i]==arr[j])
            {
               dup.push(arr[i])
              break
            }
        
    }
    
}
console.log(dup)

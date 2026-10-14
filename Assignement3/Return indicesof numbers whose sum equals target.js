let arr=
[2, 7, 11, 15, 3, 6]
let Target=9
let addition=[]

for(let i=0; i<=arr.length-1;i++)
{
   
    for (let j=1+i;j<=arr.length-1;j++)
    {
        if(arr[i]+arr[j]===Target)
            {
               addition.push(i,j)                      
            }       
    }
    
}
console.log(addition)


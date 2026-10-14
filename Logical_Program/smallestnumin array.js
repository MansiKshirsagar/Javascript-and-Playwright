

function smallnum(arr)
{
    let small=arr[0]
    for (let i=1; i<=arr.length ;i++)
    {
        
        if(arr[i]<small)
        {
            small=arr[i]
        } 
         
    }
   console.log(small)
}
smallnum([20,40,50,80])



function largestnum(arr)
{
    let largest=arr[0]
    for (let i=1 ; i<=arr.length;i++)
    {
        
        if (arr[i]>largest)
        {
            largest=arr[i]
        }
      
    }
      console.log(largest)
}
largestnum([20,51,26,23])


//addition in array num

function sumofarray(arr)
{
    let sum=0
    for(let i=0; i<arr.length;i++)
    {
        sum=sum+arr[i]
    }
    console.log(sum)
}
sumofarray([10,20,30])




function evenodd(arr){
let even=0, odd=0
{
       

       for(let i=0; i<arr.length;i++)
        {
            if(i%2==0)
            
                {
                  even++
                }
            else
            {
                      odd++
            }
        }
      
      
}
 return{even,odd}
}
console.log(evenodd([1,2,3,4,5,6,7,8,9,10]));


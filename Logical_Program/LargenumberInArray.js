function largearraynum()
{
    let arr=[20,85,75]
    let large=arr[0]

    for(let i=1;i<=arr.length;i++)
    {
         if(arr[i]>large){
           large=arr[i]
          }

    }
    console.log("large num in array is = "+ large)
}

largearraynum()
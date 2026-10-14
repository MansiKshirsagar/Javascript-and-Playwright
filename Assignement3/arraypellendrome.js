let arr=[1,2,3,2,1,4]
let rev=[]
for(let i=arr.length-1;i>=0;i--)
{
  rev.push(arr[i])
}
console.log(rev)
  if(arr.toString()==rev.toString())
  {
    console.log("Array is pellendrome")
  }
  else{
    
    console.log("Array is not pellendrome")
  }
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [4, 5, 6, 7, 8, 9];
let arrcom=[]

for(let i=0;i<=arr1.length-1;i++)
{
    for(let j=0;j<=arr2.length-1;j++)
    {
        if(arr1[i]==arr2[j])
        {
            arrcom.push(arr1[i])
        }
    }
}
console.log(arrcom)
//===>[ 4, 5, 6 ]

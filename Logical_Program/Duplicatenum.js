

let arrdup=[2,5,4,6,3,2,4,6,7,9,6]
let newdup=[]

for (let i=0;i<=arrdup.length-1;i++)
{
    for(let j=i+1; j<=arrdup.length-1;j++)
    {
        if(arrdup[i]===arrdup[j]&& !newdup.includes(arrdup[i]))
            {
        newdup.push(arrdup[i]);
            }
    }
}
console.log(newdup)




// let newarr=[2,5,4,6,3,2,4,6,7,9,6]
// let duplicate=[]
// for(let i=0;i<=newarr.length-1;i++)
// {
//     for(let j=i+1; j<=newarr.length-1;j++)
//     {
// if (newarr[i]==newarr[j])

//     {
//         duplicate.push(newarr[i])
        
//     }
//     }
// }
// console.log(duplicate)
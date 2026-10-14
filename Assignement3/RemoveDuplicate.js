let arr=[1, 2, 3, 2, 4, 3, 5, 1, 6, 5, 4, 7]
let neww=[]
for(let i=0; i<=arr.length-1;i++)

    if(!neww.includes(arr[i]))
    {
        neww.push(arr[i])
    }

    console.log(neww)
//1 1 2 3 5 8 13
let num=10;
let a=0;
let b=1
for(let i=1;i<=num;i++)
{
    console.log(a)
    let next =a+b 
     a=b;
     b=next;
}
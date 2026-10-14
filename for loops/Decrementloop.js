//number from 10-1 
for(let i=10;i>=1;i--){
    console.log(i)
}

//countdown timer

for(let i=5;i>=0;i--)
{
    console.log(`${i} seconds remaining....`)
}

/*//reverse string
//p l a y w r i g h t
//0 1 2 3 4 5 6 7 8 9
length=10
last index=length-1=9 */
let str="playwright";
let reversed=""

   //i=9
for (let i=str.length-1; i>=0; i--)
{

    reversed=reversed+str[i];
}
console.log(`orignial string = ${str}`)
console.log(`Reversed string = ${reversed}`)

//reversed characters

let word="Automation"

for(let i=word.length-1;i>=0;i--)
{
    console.log(word[i])
}
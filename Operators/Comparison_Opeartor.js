// ==	Equal to (compares values, performs type conversion)	
// ===	Strict equal to (compares value and datatype)	
// !=	Not equal to (performs type conversion)	
// !==	Strict not equal to (compares value and datatype)	
// >	Greater than	
// <	Less than	
// >=	Greater than or equal to	
// <=	Less than or equal to

//1.Equal to
let a=50; //number
let b=50;
let c=60;
let D="50"; //string
let c="Hii"

console.log(a==b) //true--- values are matching
console.log(a==c) //false ---values are not matching

//2.Strict equal to
console.log(a===b) //true--- values & datatype are matching
console.log(a===c) //false ---values are not matching
console.log(a===D) //false -- datatype diffrent

//3.!=	Not equal to 
console.log(a !=c)//true --values are not equal condition sucess
console.log(a !=b)//false -- values are equal so not equal to condition failes

//4.// !==	Strict not equal to
console.log(a!==D) //true --datatype diff value same 
console.log(a!==b) //false --datatype and value matched but not equal condition failed

//5.>	Greater than
a=10
b=20
console.log(a>b);  //false
console.log(a<b); // true

console.log(a<=b); //true
console.log(a>=b); //false

console.log(a==b); //false
console.log(a!=b); //true

//4. Logical Operators   &&  ||  !
    // returns true/false (boolean)
    // works between boolean variables

    //&-- both values true
    //|| -- any one value true

// b1    |  b2     |   &&     |     ||      |    !b1
//--------------------------------------------------
//true   |  true  |  true     |    true     |    false
//true   |  false |  false    |    true     |    fasle
//false  |  true  |  false    |    true     |    true
//false  |  false |  false    |    false    |    true

let b1=true, b2=false

console.log(b1 && b2);  //false
console.log(b1 || b2);  ///true
console.log(!b1);  //false ....not equal to b1 means not equals to true and its true  so condition not sucess so false
console.log(!b2);  //true

// Mixing of logical & Relational operators

console.log(20>10) //true
console.log(10>5) //true

console.log(20>10 && 10>5)  //true
console.log(20>10 || 10>5)  //true


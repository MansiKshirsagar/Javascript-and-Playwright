//return gives value back where function is call
//without return keyword function gives undefined output
//wrong return



//return gives value back where function is call
function add(a, b)
{
    return a+b;
}
let result=add(20,30)
console.log(result)

//2.
function username(username1 , username2)
{
    return username1,username2
 // return Name + surname;
}

let output=username("admine123", "Admin_123")
console.log(output)


//3.  //return object

function getUserdata(name,add,city,pincode)
{
     return {name,add,city,pincode}
}
let output1=
getUserdata("mansi","Airoli","Niwara",423601)
console.log(output1)

//4//return array
 
function getUserdata1(name,add,city,pincode)
{
     return [name,add,city,pincode]
}
let output2=
getUserdata1("rutuja","shirdi","housing society",423602)
console.log(output2[0])

//5//console log= withlog--print to console cannot be store

function withconsole(m,j)
{
console.log(m+j)
}
let check=withconsole(10,10)
console.log(check)

//6//withreturn--value gets store and can be reuse
function withreturn(s,k)
{
    return s+k;
}
let out=withreturn(20,30)
console.log(out*2)
console.log(check*2)

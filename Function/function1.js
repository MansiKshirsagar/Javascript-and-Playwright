function getdata()
{
    console.log("hello")
}
getdata()
//without default value
//default value
//multiple default value
//missing argument
//Extra value pass
//return stetment

//without default value
function userdata(Name, City,pincode)
{
      console.log(Name,City,pincode)
}

userdata("Mansi","Mumbai",423601)

//default value////multiple default value
function Team(Name, role="QA" ,Dep="Tetsing")
{
   console.log(`Name =${Name}, Role=${role}, Department= ${Dep}`)
}
Team("Mansi")
Team("Omnath")
Team("shweta")

//missing argument
function addition(c, d)
{
return c+d
}
let resultt=addition(52) //52+ undefined=NaN
console.log(resultt)

//Extra value pass

function addition(c, d)
{
return c+d
}
let result1=addition(52,23,21) //52+ undefined=NaN
console.log(result1)//ignore extra value



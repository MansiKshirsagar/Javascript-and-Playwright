//IF
let score =60;

if(score>=70){
    console.log("pass")
}
console.log("------------");
//if else

    if(score>=100){
        console.log("pass");

    }
    else{
        console.log(`fail`);
    }
console.log("------------");

//if else if else
     if(score>=60){
        console.log("GradeA");

    }
else if(score>=70)
{
console.log("GradeB");
}
else if(score>=80)
{
console.log("GradeC");
}
else if(score>=90)
{
console.log("GradeD");
}
 else
{
console.log("fail");
}

//nestedif

let age=19;
let weight=50;
if(age>=18)
{
console.log(`age criteria meet`)
if(weight>=55)
{
    console.log("weight criteria meet")
}
else{
    console.log(`weight criteria not meet`)
}
}
else{
    console.log(`age criteria not meet`)
}
console.log("------switch------");
let Day=3
switch (Day) {
case 1:
       console.log("-Monday-"); 
        break;
case 2:
        console.log("-Tuesday-");
        break;
case 3:
        console.log("--Wednesday-");
        break;
case 4:
        console.log("-Thursday--");
        break;

    default:
        console.log("invalid input")
        break;
}
console.log("------Ternery operator------");
let age1=18
letweight1=50

blooddonation=age>=18?"Allowed":"Denied"
console.log(blooddonation)

let score1=50
grade=score>=80?"GradeA":score>=70?"gradeB":score>=60?"gardeC":score>=50?"D":"Fail"
console.log(grade)
console.log("----------syntax of object------------------")
/*syntax of object

let objectname={key1: value1
key2: value2
key3: value3
key4: value4}

*/

//object length 

let officefriend=
{
    name1: "mansi" ,
    name2: "shweta" ,
    name3: "shirish" ,
    name4: "kiran"
}
console.log(Object.keys(officefriend).length)

console.log("----------ways to define obejct------------------")
//ways to define obejct
//1.using literal 
let obj1={keys1:"A", keys2:"B", keys3:"C"}

//2.using new keyword and object
let obj2 = new Object()
obj2.name="mansi"
obj2.age=29

//3. using constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("John", 25);

console.log(p1);

console.log("----------call object values------------------")

let officeF=
{
    name1: "mansi" ,
    name2: "shweta" ,
    name3: "shirish" ,
    name4: "kiran"
}
//dot notation
console.log(officeF.name1)
console.log(officeF.name2)

//Bracket Notation
console.log(officeF["name1"])
console.log(officeF["name4"])

//Destructuring
console.log(officeF.name1)
console.log(officeF.name3)

// Loop Through the Object
for(let key in officeF)
{
    console.log(`${key} = ${officeF[key]}`)
}

//oject.keys---return in array
console.log(Object.keys(officeF))

//Object .values---return in array
console.log(Object.values(officeF))

//object.entries--return in array
console.log(Object.entries(officeF))


console.log("-----------------------------")

let office=
{
    name1: "mansi" ,
    name2: "shweta" ,
    name3: "shirish" ,
    name4: "kiran"
}
//update value in object

office.name1="Omnath"
console.log(office)

//using bracket notation

office["name2"]="kusthubh"
console.log(office)

//Add new property

office.name5="Ashwini"
console.log(office)

//delete property

delete office.name1
console.log(office)
console.log(delete office.name1)


console.log("------------Nested Object---------------")
const student = {
  name: "Rahul",
  address: {
    city: "Mumbai",
    pin: 400001
  }
};

student.address.city = "Pune";

console.log(student);

console.log(student.address.city)

student.address.city="Mumbai"
console.log(student)

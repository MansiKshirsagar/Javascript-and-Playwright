let obj={name:"mansi", age:26,city:"mumbai"}

//Basic object destructing
let{name,age}=obj
console.log(name)
console.log(age)

//Rename Variables
let person = {
    name: "John",
    age: 25
};

let { name: fullName, age: userAge } = person;

console.log(fullName);
console.log(userAge);

//Default Values

let personn = {
    namee: "kavya"
};

let { namee, agee = 18 } = personn;

console.log(namee);
console.log(agee);

//Nested Object Destructuring

let student = {
    namme: "Alice",
    marks: {
        math: 90,
        science: 85
    }
};

let {
    namme,
    marks: { math, science }
} = student;

console.log(namme);
console.log(math);
console.log(science);

//rest operator ...
let pperson = {
    nname: "John",
    aage: 25,
    city: "Mumbai",
    country: "India"
};

let { nname, ...details } = pperson;

console.log(nname);
console.log(details);
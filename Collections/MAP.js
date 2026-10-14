//MAP

const collection= new Map ();

//set-- use to add data in collection
collection.set("name","mansi");
collection.set("age",29);
collection.set("company","active");
console.log(collection);

//get -- get value of collection using key
const agee=collection.get('age');
console.log('age is='+agee);

//has-- check if key is present or not

const haskey=collection.has("company");
console.log(haskey);

//delete-- remove key and value pair
//collection.delete("age");
console.log(collection);

//clear()-- clear all collection
//collection.clear();
console.log(collection);

//keys-- get all keys
const allkeys=collection.keys();
console.log(allkeys);

//values-- get all values
const allvalues=collection.values()
console.log(allvalues)

//enteries--get key and values pair
const allentries=collection.entries();
console.log(allentries);

//foreach--loop through iterate

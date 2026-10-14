const setcoll= new Set()


//add-- to add record 
setcoll.add('mansi')
setcoll.add(25)
setcoll.add("mansi")
setcoll.add(20)
setcoll.add('priya')
setcoll.add('priya')

//has-- check value is present or not
const namee=setcoll.has('mansi')
console.log(namee);

//delete(value)-- delete value 
setcoll.delete(25)
console.log(setcoll)

//clear()--clear all collection
//setcoll.clear()
console.log(setcoll)

//values()-- get all values
const allvalues= setcoll.values()
console.log(allvalues);

//all values using a loop:
for(const value of setcoll.values())
{
    console.log(value);
}

//Returns each value twice: [value, value].
for (const entry of setcoll.entries()) {
    console.log(entry);
}

/*
| Set                   | Map                    |
| --------------------- | ---------------------- |
| Stores **values**     | Stores **key + value** |
| `add(value)`          | `set(key, value)`      |
| No `get()`            | Has `get()`            |
| Values must be unique | Keys must be unique    |
| `set.has(value)`      | `map.has(key)`         |
| `set.delete(value)`   | `map.delete(key)`      |*/

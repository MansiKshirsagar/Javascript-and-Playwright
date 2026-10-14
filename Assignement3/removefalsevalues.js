
//falsy= 0,"",null,undefined,false,naN

let arr = [0, 1, "", null, 2, undefined, 3, false, NaN];

let result = arr.filter(Boolean);

console.log(result);

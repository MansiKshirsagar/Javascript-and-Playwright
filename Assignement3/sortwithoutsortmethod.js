//Given: [64,34,25,12,22,11,90] sort array without sort method

let arr= [64,34,25,12,22,11,90]

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i+1; j < arr.length - 1 ; j++) {
    if (arr[1] > arr[j ]) {//64>34
      // swap
      let temp = arr[i];
      arr[i] = arr[j ];
      arr[j] = temp;
    }
  }
}

console.log(arr); // [11, 12, 22, 25, 34, 64, 90]
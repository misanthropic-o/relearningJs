// let arr = [1, 2, 2, 2, 2, 3, 4];
// let tarVal = 2;

// function arrOp(arr) {
//   arrSum = arr.reduce((sum, i) => sum + i);
//   arrMax = Math.max(...arr);
//   arrMin = Math.min(...arr);
//   arrRev = arr.reverse();

//   console.log(arrSum, arrMax, arrMin, arrRev);
// }

// function countOcc(arr, tarVal) {
//   const occs = arr.filter((occ) => tarVal == occ);
//   console.log(occs.length);
// }

// arrOp(arr);
// countOcc(arr, tarVal);

// let arr = [1, 2, 3, 4, 5, 6, 7, 6, 7, 8, 9];
// let tarVal = 4;

// console.log(arr.map((x) => x * 2));
// console.log(arr.filter((x) => x % 2 == 0));
// console.log(arr.filter((x) => x > tarVal));
// console.log(arr.map((x) => x ** 2));

// let shitArr = [1, 2, "boobies", false, "fuck", undefined, "67"];

// console.log(shitArr.filter((x) => typeof x == "number"));

let arr = [1, 2, 2, 2, 3, 4, 4];

console.log([...new Set(arr)]);

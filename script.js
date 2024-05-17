// function func(s) {
//   let lR = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//   let srJ = lR.split("").reverse().join("");

//   return lR === srJ ? true : false;
// }

// const s = "54345";
// console.log(func(s));

// function func(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }
// const nums = [3, 2, 4],
//   target = 6;

// console.log(func(nums, target));

// function func(nums) {
//   let sortedNum = nums.sort((a, b) => a - b);
//   console.log(sortedNum);
//   let n = sortedNum.length;
//   let result = [];

//   for (let i = 0; i < n - 2; i++) {
//     if (i > 0 && sortedNum[i] == sortedNum[i - 1]) {
//       continue;
//     }
//     let lPoint = i + 1;
//     let rPoint = n - 1;
//     debugger;
//     while (lPoint < rPoint) {
//       let sum = sortedNum[i] + sortedNum[lPoint] + sortedNum[rPoint];

//       if (sum > 0) {
//         rPoint--;
//       } else if (sum < 0) {
//         lPoint++;
//       } else {
//         result.push([sortedNum[i], sortedNum[lPoint], sortedNum[rPoint]]);
//         lPoint++;
//         rPoint--;

//         // Skip duplicates for lPoint
//         while (lPoint < rPoint && sortedNum[lPoint] == sortedNum[lPoint - 1]) {
//           lPoint++;
//         }

//         // Skip duplicates for rPoint
//         while (lPoint < rPoint && sortedNum[rPoint] == sortedNum[rPoint + 1]) {
//           rPoint--;
//         }
//       }
//     }
//   }

//   return result;
// }

// const nums = [-1, 0, 1, 2, -1, -4];

// console.log(func(nums)); // Output should be [[-1, -1, 2], [-1, 0, 1]]

function permutationInString(s1, s2) {}
const s1 = "ab",
  s2 = "eidboaoo";

console.log(permutationInString(s1, s2));

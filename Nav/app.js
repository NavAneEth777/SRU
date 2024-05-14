/*
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *  Input: nums = [-1,0,1,2,-1,-4]
   Output: [[-1,-1,2],[-1,0,1]]
   Explanation: 
   nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
   nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
   nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
   The distinct triplets are [-1,0,1] and [-1,-1,2].
   Notice that the order of the output and the order of the triplets does not matter.
 */
let nums = [-1,0,1,2,-1,-4];
let threesum = (nums) => {
    for (let i=0; i<nums.length; i++) {
        let x = "";
        for (let j=i+1; j<nums.length; j++) {
            for (let k=j+1; k<nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    x += "[" + nums[i] + ", " + nums[j] + ", " + nums[k] + "]";
                }
            }
        }
        return x;
    }
}
console.log(threesum(nums));

let arr = [1,1,1,3,3,4,3,2,4,2];
let nums = [1,2,3,1];
let duplicates = (arr) => {
    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if (arr[i] == arr[j]) {
                return true;
            }
        } 
    }
    return false;
}
console.log(duplicates(nums));

let arr = [11,15,6,8,9,10];
const key = 16;
let pairs = (arr, key) => {
    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if ((arr[i] + arr[j]) == key) {
                return true;
            }
        }
    }
    return false;
}
console.log(pairs(arr, key));

let height = [1,8,6,2,5,4,8,3,7];
let maxArea = (height) => {
    let n = height.length;

    //left max
    let leftMax = [];
    leftMax[0] = height[0];
    for (let i=1; i<n; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i-1]);
    }

    //right max
    let rightMax = [];
    leftMax[n-1] = height[n-1];
    for (let i=n-2; i>0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i+1]);
    }

    //max area
    let maxarea = 0;
    for (let i=0; i<n; i++) {
        let area = Math.max(leftMax[i], rightMax[i]);
        maxarea += area - height[i];
    }
    return maxarea;
}
console.log(maxArea(height));

let arr = [-7,-3,2,3,11];
let newArr = [];
let sortedSquares = (arr, newArr) => {
   for (let i=0; i<arr.length; i++) {
      let sqr = 1;
      newArr.push(Math.pow(arr[i], 2));
   }
   return newArr.sort((a, b) => a - b);
}
console.log(sortedSquares(arr, newArr));

const n = 3;
let fib = (n) => {
   if (n == 0) {
      return 0;
   }
   if (n == 1) {
      return 1;
   }
   return fib(n-1) + fib(n-2);
}
console.log(fib(n));

let arr = [1,2,3,4];
let newArr = [];
let runningSum = (arr) => {
   let sum = 0;
   for (let i=0; i<arr.length; i++) {
      for (let j=0; j<i+1; j++) {
         sum += arr[j];
         newArr.push(sum);
      }
   }
   return newArr; 
}
console.log(runningSum(arr));

let arr = [1,2,3,4,5];
const key = 5;
for (let i=0; i<arr.length; i++) {
   if (arr[i] == key) {
      console.log("present");
      console.log(i);
   }
}

let arr = ["united states of america", "austraila", "germany"];
// let arr = ["india", "china", "pakisthan"];
let largest = (arr) => {
  let ans = 0;
  let curr = arr[0].length;
  for (let i=0; i<arr.length; i++) {
    if (arr[i].length > curr) {
      ans += i;
    }
  }
  return arr[ans];
}
console.log(largest(arr));

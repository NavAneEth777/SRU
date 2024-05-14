// // let num = 1234;
// // let reversed = 0;
// // while (num !== 0) {
// //     let digit = num % 10;
// //     reversed = reversed * 10 + digit;
// //     num = Math.floor(num / 10);
// // }
// // console.log(reversed);

// // let arm = (num) => {
// //     let len = num.length;
// //     let ans = 0;
// //     while (num !== 0) {
// //         let digit = num % 10;
// //         ans += Math.pow(digit, len);
// //         num = Math.floor(num / 10);
// //     }
// //     // if (ans == num) {
// //     //     return "armstrong!!";
// //     // } else {
// //     //     return "not armstrong!!"
// //     // }
// //     return ans;
// // }
// // console.log(arm(153));

// function isArmstrongNumber(num) {
//     const digits = Array.from(String(num), Number);
//     const numDigits = digits.length;
    
//     let sum = 0;
    
//     for (let i = 0; i < numDigits; i++) {
//         sum += Math.pow(digits[i], numDigits);
//     }
    
//     return num === sum;
//     }
    
//   // Example usage
// console.log(isArmstrongNumber(153)); // Output: true
// console.log(isArmstrongNumber(123)); // Output: false
// console.log(isArmstrongNumber(9474)); // Output: true

// let rows = 6; // Replace with the number of rows

// for (let i = 1; i <= rows; i++) {
//     let pattern = '';

//     for (let j = 1; j <= rows - i; j++) {
//       pattern += ' ';
//     }

//     for (let k = 1; k <= i; k++) {
//       pattern += '* ';
//     }

//     console.log(pattern);
// }
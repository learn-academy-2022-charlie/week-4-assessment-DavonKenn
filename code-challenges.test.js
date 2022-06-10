// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { FOR_INIT_KEYS } = require("@babel/types");

// const { isTypedArray } = require("util/types")
// const { describe } = require("yargs")



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("colorScheme", () => {
const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
it("takes in an array, removes the first item from the array and shuffles the remaining content.", () =>{  
expect(colorScheme(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
expect(colorScheme(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
})
});

// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

//   ReferenceError: color1 is not defined

//     72 |         return shuffColors
//     73 |     }
//   > 74 | console.log(colorScheme(color1))
//        |                         ^
//     75 | console.log(colorScheme(color2))
//     76 |
//     77 |

//     at Object.color1 (code-challenges.test.js:74:25)
//     at TestScheduler.scheduleTests (node_modules/@jest/core/build/TestScheduler.js:317:13)

// Test Suites: 1 failed, 1 total
// Tests:       0 total
// Snapshots:   0 total
// Time:        0.375 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

// b) Create the function that makes the test pass.

// PSEUDO-CODE
// declaring a function that takes in array as an argument
// need to figure out how to remove the item from the array
// create a new empty array to store existing shuffled arrray
// use conditional to check if its the first word in the array
// if the word arent then i use .push to push them into blank array.
// establish the length of the array
// will be using two methods .splice or .shift() but .
// input:array parameter
// output:array of colors for color1 that has the values in the array scattered but purple and chartreuse is taking out.
// for loop for iteration.

// const colorScheme = (array) => {
//     let first = array.shift();
//     let shuffColors = []
//    for(let i = 0; i < array.length; i++)
//         return shuffColors
//     }
// console.log(colorScheme(color1))
// console.log(colorScheme(color2))

const colorScheme = (array) => {
  array.shift()
  console.log(array.sort(() => Math.random() - 0.5));
  return array.sort(() => Math.random() - 0.5)
}


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

 describe("bigNlittle", () => {
 const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
 const nums2 = [109, 5, 9, 67, 8, 24]
 // Expected output: [5, 109]

 it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () =>{  
expect(bigNlittle(nums1)).toEqual(expect.arrayContaining([-8, 90])),
expect(bigNlittle(nums1)).not.toEqual(expect.arrayContaining([3, 56,0, 23, 6])) ,
expect(bigNlittle(nums2)).toEqual(expect.arrayContaining([5, 109])) 
expect(bigNlittle(nums2)).not.toEqual(expect.arrayContaining([9, 67, 8, 24]))
})
});

// b) Create the function that makes the test pass.

// Psuedo Code
// declaring a function name calling it max Val,minVal 
// input:array parameter
// output:array of colors for color1 that has the values in the array scattered but purple and chartreuse is taking out.
// for loop for iteration.
// input:
// output:

// const bigNlittle = (arr) => {
//     let max = arr[0];
// }
    
// console.log(bigNlittle);


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("twoAr",() => {
const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
it("takes in two arrays as arguments and returns one array with no duplicate values.", () =>{  
expect(twoAr(testArray1)).toEqual(expect.arrayContaining([3, 7, 10, 5, 4, 3, 3])),
expect(twoAr(testArray1)).not.toEqual(expect.arrayContaining([7, 8, 2, 3, 1, 5, 4])) ,
expect(twoAr(testArray2)).toEqual(expect.arrayContaining([[3, 7, 10, 5, 4, 8, 2, 1]
])) 
expect(twoAr(testArray2)).not.toEqual(expect.arrayContaining([7, 8, 2, 3, 1, 5, 4]))
})
});

// b) Create the function that makes the test pass.

//  Pseudo Code
// methods .concat indexof tp find index of duplicates and .push to put new array back in s
// need to merge both arrays
// loop through the array
// input:two arrays as an argument
// output:[3, 7, 10, 5, 4, 8, 2, 1]

// const twoAr = (arr1, arr2) => {
//     let arr = arr1.concat(arr2);
//     let newArr = [];

//     for(let i of arr) {
//         if(newArr.indexOf(i) === -1) {
//             newArr.push(i);
//         }
//     }
// }
// console.log(newArr)
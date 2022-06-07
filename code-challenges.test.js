// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { isTypedArray } = require("util/types")
const { describe } = require("yargs")

describe('', () => {
    it('matches even if received contains additional ', () => {
      expect(()).toEqual(expect.arrayContaining(expected));
    });
    it('', () => {
      expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
    });
  });



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
it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    expect(mVal(colors1)).toEqual(expect.arrayContaining)(["yellow", "blue", "pink", "green"]),
    expect(mVal(colors2)).toEqual(expect.arrayContaining)(["saffron","aquamarine", "periwinkle", "indigo", "ochre"],
      )
  })
})

// b) Create the function that makes the test pass.

// PSEUDO-CODE
// dclaring a function name calling it colorScheme
// will be using two methods .splice or .shift() but .filite has built in conditional statement.
// input:array parameter
// output:array of colors for color1 that has the values in the array scattered but purple and chartreuse is taking out.
// for loop for iteration.

// const colorScheme = (array) => {
//     let newColors = array.map(value => {
//         return value[0].shift 
//      })
//      return newColors.shuffle
//     }
// console.log(colorScheme(colors1))
// console.log(colorScheme(colors2))


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("mVal", () => {
const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
      expect(mVal(nums1)).toEqual(expect.arrayContaining)([-8, 90]),
      expect(mVal(nums2)).toEqual(expect.arrayContaining)([5, 109],
        )
    })
  })

// b) Create the function that makes the test pass.

// Psuedo Code
// declaring a function name calling it max Val,minVal
// 
// input:array parameter
// output:array of colors for color1 that has the values in the array scattered but purple and chartreuse is taking out.
// for loop for iteration.

const maxVal (arr) => {
    let max = arr[0];
  
    for (let val of arr) {
      if (val > max) {
        max = val;
      }
    }
    return max;
  }
console.log(maxVal);

  const minVal (arr) => {
    let min = arr[0];
  
    for (let val of arr) {
      if (val > min) {
        min = val;
      }
    }
    return min;
  }
console.log(minVal);
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// b) Create the function that makes the test pass.

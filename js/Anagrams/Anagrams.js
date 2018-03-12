// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const stringA = 'Anagrams algorithm';
const stringB = 'algorithm Anagrams';

// Solution 2

// function anagrams(stringA, stringB) {
//   const resultA = mapChar(stringA);
//   const resultB = mapChar(stringB);
//
//   if (Object.keys(stringA).length !== Object.keys(stringB).length) {
//     return false;
//   }
//
//   for (let char in resultA) {
//     if (resultA[char] !== resultB[char]) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// // Helper function
// function mapChar(str) {
//   const charMap = {};
//
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap;
// }
//
// console.log(anagrams(stringA, stringB));

// Solution 1
//
function anagrams(stringA, stringB) {
  resultA = cleanString(stringA);
  resultB = cleanString(stringB);

  console.log(resultA === resultB);
}

// Helper function
function cleanString(str) {
  return str.replace(/[^\w]/g, '').split('').sort().join('');
}

anagrams(stringA, stringB);

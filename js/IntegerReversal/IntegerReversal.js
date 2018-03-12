// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

let n = 157;

// Solution 1
function reverseInt(n) {
  let nArr = n
    .toString()
    .split('')
    .reverse()
    .join('');

  let result = parseInt(nArr);

  // if (n <= 0 ) {
  //   result = result * -1;
  // }

  console.log(result * Math.sign(n));
}

reverseInt(n);

// Solution

// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
//
//   return parseInt(reversed) * Math.sign(n);
// }
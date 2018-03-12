// Reverse string

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1

// Transform to Array
// reverse Array
// Transform to string
let string = 'Reverse string';

// function reverse(str) {
//   // const arr = str.split('');
//   const arr = Array.from(str);
//   arr.reverse();
//   console.log(arr.join(''));
//   return arr.join('');
// }

// function reverse(str) {
//   const result = str
//                   .split('')
//                   .reverse()
//                   .join('');
//   console.log(result);
//
// }
// reverse(string);


// Solution 2

// function reverse(str) {
//   let reversed = '';
//
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   console.log(reversed);
// }
//
// reverse(string);


// Solution 3

function reverse(str) {
  let result = str.split('').reduce((reversed, char) => {
    return char + reversed;
  }, '');

  console.log(result);
}

reverse(string);





















// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const string = 'a short sentence';

// Solution 2

// function capitalize(str) {
//   let result = str[0].toUpperCase();
//
//   for (let i = 1; i < str.length; i++) {
//     if (str[i -1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//
//   return result;
// }
//
// capitalize(string);


// Solution 1

function capitalize(str) {
  let words = [];
  const arr = str.split(' ');

  for (let word of arr) {
    word = word[0].toUpperCase() + word.slice(1, word.length);
    console.log(word);
    words.push(word);
  }

  // return words.join(' ');
  console.log(words.join(' '));
}

capitalize(string);










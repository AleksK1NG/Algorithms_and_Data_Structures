// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


let str = 'Maximal Character';

// Solution 1

function maxChar(str) {
  const arr = Array.from(str);
  let max = 0;
  let maxChar = '';
  let charObj = {};

  for (let char of str) {
    if (charObj[char]) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }
  //   charObj[char] = charObj[char] + 1 || 1;
  }

  for (let char in charObj) {
    if (charObj[char] > max) {
      max = charObj[char];
      maxChar = char;
    }
  }

  console.log(charObj);
  console.log(maxChar);
}

maxChar(str);










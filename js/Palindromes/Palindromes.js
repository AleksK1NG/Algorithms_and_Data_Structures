// Palindromes

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

let str = 'abba';
// let str = 'Palindromes';


// Solution 1

function palindrome(str) {
  let result = Array.from(str).reverse().join('');
  // return result === str;
  console.log(result === str);
}

palindrome(str);

// Solution 2

// function palindrome(str) {
//   let result = str.split('').every((char, index) => {
//     return char === str[str.length - index - 1]
//   });
//
//   console.log(result);
// }
//
// palindrome(str);


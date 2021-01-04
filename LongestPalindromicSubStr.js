// LongestPalindromicSubStr.js   leet 5


/**
  Given a string s, return the longest palindromic substring in s.

  Example 1:

  Input: s = "babad"
  Output: "bab"
  Note: "aba" is also a valid answer.

  Example 2:

  Input: s = "cbbd"
  Output: "bb"

  Example 3:

  Input: s = "a"
  Output: "a"

  Example 4:

  Input: s = "ac"
  Output: "a"

 * @param {string} str
 * @return {string}
 */

// Return the longest palindromic substring in string str.
function longestPalindrome(str) {
  // Handle trivial input of less than three characters.
  if (str.length == 0) {
    return "";
  }

  if (str.length < 3) {
    return str[0];
  }

  let curLongestDeltaIndices = [0,0];
  let leftI = 0;
  let rightI = 0;

  // Work our way left to right through string str looking for palindromes.
  while (true) {
    // Right index increment.
    if (++rightI == str.length) break;

    let tmpDeltaIndices = getPalindromeRange(str, leftI, rightI);

    // Compare length of new palindrome to length of the current longest.
    let tmpDelta = tmpDeltaIndices[1] - tmpDeltaIndices[0];
    let curLongDelta = curLongestDeltaIndices[1] - curLongestDeltaIndices[0];
    if (tmpDelta > curLongDelta) {
      curLongestDeltaIndices = tmpDeltaIndices;
      if (tmpDelta >= str.length/2) break;//A longer Palindrom is not possible.
    }

    // Note: Left index increment.
    tmpDeltaIndices = getPalindromeRange(str, ++leftI, rightI);

    // Compare length of new palindrome to length of the current longest.
    tmpDelta = tmpDeltaIndices[1] - tmpDeltaIndices[0];
    curLongDelta = curLongestDeltaIndices[1] - curLongestDeltaIndices[0];
    if (tmpDelta > curLongDelta) {
      curLongestDeltaIndices = tmpDeltaIndices;
      if (tmpDelta >= str.length/2) break;//A longer Palindrom is not possible.
    }
  }// end while

  return str.slice(curLongestDeltaIndices[0], curLongestDeltaIndices[1] + 1);
}


// Compares the characters at the leftI and rightI index of the string str.
// If they are the same then record those values and increment the indexes.
// If one of the indexes goes out of range then return curIndices.
// If the characters do not match then return curIndices.
function getPalindromeRange(str, leftI, rightI) {
  let curIndices; // starting and ending indexes for a valid palindrome.

  if (str[leftI] == str[rightI]) {  // then we have matching characters.
     do {
      curIndices = [leftI, rightI];
      if (--leftI < 0) break;
      if (++rightI == str.length) break;
    }
    while (str[leftI] == str[rightI]);

  } else {
    curIndices = [leftI, leftI];
  }

  return curIndices;
}


//***       Test Code       ***//

console.log(longestPalindrome("tgvabpmsosmpbauwp")); // "abpmsosmpba"
console.log(longestPalindrome("tgvabpmssmpbauwp")); // "abpmssmpba"
console.log(longestPalindrome("pleuwxwuelp")); // "pleuwxwuelp"
console.log(longestPalindrome("wheabbatpcqrggrqlw")); // "qrggrq"
console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("a")); // "a"
console.log(longestPalindrome("ac")); // "a"

// longestCommonPre.js  leet 14

/**
  Write a function to find the longest common prefix string amongst an array of strings.

  If there is no common prefix, return an empty string "".



  Example 1:

  Input: strs = ["flower","flow","flight"]
  Output: "fl"

  Example 2:

  Input: strs = ["dog","racecar","car"]
  Output: ""
  Explanation: There is no common prefix among the input strings.


 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefixV1(strs) {
  let charI = 0; // character index being compared for each string.

  // Compare the characters from each string with corresponding indexes.
  looper: while (true) {
    for (let str of strs) {
      if (str[charI] != strs[0][charI]) break looper;
    }
    ++charI;
  }
  return strs[0].slice(0, charI);
}

//***       Test Code       ***//
console.log(longestCommonPrefixV1(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefixV1(["dog","racecar","car"])); // ""



function longestCommonPrefixV2(strs) {
  let charI = 0; // character index being compared for each string.

  // Compare the characters from each string with corresponding indexes.
  while (true) {
    if (!strs.every(str => str[charI] === strs[0][charI])) break;
    ++charI;
  }
  return strs[0].slice(0, charI);
}

//***       Test Code       ***//
console.log(longestCommonPrefixV2(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefixV2(["dog","racecar","car"])); // ""

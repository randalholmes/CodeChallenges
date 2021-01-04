// longestSubstringNoRepeat.js  leet 3


/**
Given a string s, find the length of the longest substring
without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.


Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.


Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and
not a substring.

Example 4:

Input: s = ""
Output: 0



 * @param {string} str
 * @return {number}
 */


function lengthOfLongestSubstring(str) {
  let longestSubStr = [];
  let curStr = [];
  const curFoundChars = new Set();

  Outer: for (let i=0; i<str.length; ++i) {
    if (curFoundChars.has(str[i])) {
      if (curStr.length > longestSubStr.length) {
        longestSubStr = curStr;
      }
      curStr = [];
      curFoundChars.clear();
      continue;
    } else {
      curStr.push(str[i]);
      curFoundChars.add(str[i]);
    }

    for (let j=i+1; j<str.length; ++j) {
      if (curFoundChars.has(str[j])) {
        if (curStr.length > longestSubStr.length) {
          longestSubStr = curStr;
        }
        curStr = [];
        curFoundChars.clear();
        continue Outer;
      } else {
        curStr.push(str[j]);
        curFoundChars.add(str[j]);
      }
    }
  }// end Outer for

  console.log(`Longest Sub String is: ${longestSubStr}. With a length of ${longestSubStr.length}.`);

  return longestSubStr.length;
}

//***    Test Data    ****
lengthOfLongestSubstring("abcabcbb"); // abc
lengthOfLongestSubstring("bbbbb");    // b
lengthOfLongestSubstring("pwwkew");   // wke
lengthOfLongestSubstring("");         //

// zigzag.js  leet 6

/**
  The string "PAYPALISHIRING" is written in a zigzag pattern on a given
  number of rows like this: (you may want to display this pattern in a
  fixed font for better legibility)

  P   A   H   N
  A P L S I I G
  Y   I   R

  And then read line by line: "PAHNAPLSIIGYIR"

  Write the code that will take a string and make this conversion given
  a number of rows:

  string convert(string s, int numRows);

  Example 1:

  Input: s = "PAYPALISHIRING", numRows = 3
  Output: "PAHNAPLSIIGYIR"

  Example 2:

  Input: s = "PAYPALISHIRING", numRows = 4
  Output: "PINALSIGYAHRPI"
  Explanation:
  P     I    N
  A   L S  I G
  Y A   H R
  P     I

  Example 3:

  Input: s = "A", numRows = 1
  Output: "A"

 * @param {string} str
 * @param {number} numRows
 * @return {string}
 */


function convert(str, numRows) {
  // Create Array of Stacks, where each stack holds the characters for a row.
  let rows = [];
  for (let i=0; i<numRows; ++i) {
    rows.push([]);
  }

  let stackNum = 0; // Current stack/row we are adding a character to.
  let inc = 1;      // Used to increment and decrement the stack in current use.

  // Pull each character from str and add to appropiate stack.
  for (let i=0; i<str.length; ++i) {
    rows[stackNum].push(str[i]);
    stackNum += inc;

    if (stackNum > numRows-1) {
      stackNum -= 2;
      inc = -1;
    }

    if (stackNum < 0) {
      stackNum = 1;
      inc = 1;
    }
  }// end for

  // Combine characters from stacks into a single string.
  let returnStr = "";
  for (let stackStr of rows) {
    returnStr += stackStr.join("");
  }

  return returnStr;
}

//***     Test Data    ****//

console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // "PINALSIGYAHRPI"
console.log(convert("A", 1));              // "A"

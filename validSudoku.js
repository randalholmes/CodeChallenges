// validsudoku.js  leet 36

/**
  Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need
  to be validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain
    the digits 1-9 without repetition.

    Note:

    A Sudoku board (partially filled) could be valid but is not necessarily
    solvable. Only the filled cells need to be validated according to
    the mentioned rules.

    Input: board =
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
    Output: true

    Example 2:

    Input: board =
    [["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
    Output: false

    Explanation: Same as Example 1, except with the 5 in the top left corner
    being modified to 8. Since there are two 8's in the top left 3x3 sub-box,
    it is invalid.

 * @param {character[][]} board
 * @return {string} error message
 */

 // Validates a Sudoku board for correctness.
 function isValidSudoku(board) {
   // Set up lists of empty Sets for storing found values in the 'board'.
   const rows = [];  // Rows in board
   const cols = [];  // Columns in board
   const subBs = []; // Sub-boxes in board
   for (let x=0; x<9; ++x){
     rows.push(new Set());
     cols.push(new Set());
     subBs.push(new Set());
   }

   // Iterate through all values in board and verify they meet constraints.
   for (let r=0; r<9; ++r) {
     for (let c=0; c<9; ++c) {
       let val = board[r][c];
       if (val==".") continue; // Skip over empty slots.

       if (rows[r].has(val)) return `Row ${r} is bad.`;
       rows[r].add(val);

       if (cols[c].has(val)) return `Col ${c} is bad.`;
       cols[c].add(val);

       let BoxNum =(Math.floor(r/3) * 3) + Math.floor(c/3);
       if (subBs[BoxNum].has(val)) return `Sub-Box ${BoxNum} is bad`;
       subBs[BoxNum].add(val);
     }
   }
   return "This board is valid.";
 }

let board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(board)); // "This board is valid."

board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(board)); // "Sub-Box 0 is bad"

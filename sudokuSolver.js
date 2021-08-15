// sudokuSolver.js  leet 37

/**
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

    Each of the digits 1-9 must occur exactly once in each row.
    Each of the digits 1-9 must occur exactly once in each column.
    Each of the digits 1-9 must occur exactly once in each of
    the 9 3x3 sub-boxes of the grid.

The '.' character indicates empty cells.

Input: board =
[["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]]


Output:
[["5","3","4","6","7","8","9","1","2"],
["6","7","2","1","9","5","3","4","8"],
["1","9","8","3","4","2","5","6","7"],
["8","5","9","7","6","1","4","2","3"],
["4","2","6","8","5","3","7","9","1"],
["7","1","3","9","2","4","8","5","6"],
["9","6","1","5","3","7","2","8","4"],
["2","8","7","4","1","9","6","3","5"],
["3","4","5","2","8","6","1","7","9"]]

 * @param {character[][]} board
 * @return {boolean} Able to complete board or not: true/false
 */

// A recursive function that tries to solve a Sudoku puzzle.
function solveSudoku(board) {
  // Iterate through all rows and columns of "board" trying values in
  // the range of 0-9 to see if they will satisfy the constraints of
  // of the puzzle. If a value turns out not to work then backtracking
  // is used to try alternative values.
  for (let r=0; r<9; ++r){
    for (let c=0; c<9; ++c) {
      if (board[r][c] == ".") {  // have an empty slot.
        // Try the values 1-9 to see if they will work.
        for (let num=1; num<10; ++num){
          let val=num.toString();
          if (isValid(board, r, c, val)) {
            board[r][c] = val;
            if (solveSudoku(board)) {
              return true;
            }
          }
        }
        // Failed to find a value that works in the current board position.
        // Clear current board position and backtrack.
        board[r][c] = ".";
        return false;
      }
    }
  }
  return true; // completed board.
}

// Verifies that 'val' in position (r,c) meets constraints.
function isValid(board, r, c, val) {
  // Check if val is in row 'r'.
  if (board[r].some(num => num == val)) return false;

  // Check if val is in column 'c'
  for (let row=0; row<9; ++row) {
    if (board[row][c] == val) return false
  }

  // Check if val is in sub-box.
  const row = Math.floor(r/3) * 3;
  const col = Math.floor(c/3) * 3;
  for (let rDelta=0; rDelta<3; ++rDelta) {
    for (let cDelta=0; cDelta<3; ++cDelta) {
      if (board[row + rDelta][col + cDelta] == val) return false;
    }
  }

  return true; // 'val' at position (r,c) meets all constraints.
}

// Prints 'board' data to terminal nicely formatted.
function prettyPrint(board) {
  for (let row of board) {
    console.log(row.join(","));
  }
}

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

test();

function test() {
  let board =
  [["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]];

  console.log("\nStarting Board")
  prettyPrint(board);

  solveSudoku(board);

  console.log("\n\nSolution to Board")
  prettyPrint(board);
  console.log(isValidSudoku(board));

  console.log("hi");
}

// Unique Paths.  Leet Code 62

/*  
    A robot is located at the top-left corner of a m x n grid 
    (marked 'Start' in the diagram below). The robot can only 
    move either down or right at any point in time. The robot is 
    trying to reach the bottom-right corner of the grid (marked 
    'Finish' in the diagram below). How many possible unique 
    paths are there?

Example 1:

Input: m = 3, n = 7
Output: 28

Example 2:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

Example 3:

Input: m = 7, n = 3
Output: 28

Example 4:

Input: m = 3, n = 3
Output: 6

 * @param {number} m  Number of rows
 * @param {number} n  Number of colums
 * @return {number}
 */

 const uniquePaths = function(m, n) {

    const nextStep = (row, col) => {
        if (!row && !col) {
            ++pathCnt
            return
        }

        if (row) nextStep(row-1, col)
        if (col) nextStep(row, col-1)
    }

    let pathCnt = 0
    nextStep(m-1,n-1)

    return pathCnt
}


console.log(" 3 x 7", uniquePaths(3,7))

console.log(" 7 x 3", uniquePaths(7,3))

console.log(" 3 x 3", uniquePaths(3,3))

console.log(" 3 x 2", uniquePaths(3,2))

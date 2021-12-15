// Generate Parentheses.  Leet Code 22

/*
    Given n pairs of parentheses, write a function to generate 
    all combinations of well-formed parentheses.
 
    Example 1:

    Input: n = 3
    Output: ["((()))","(()())","(())()","()(())","()()()"]

    Example 2:

    Input: n = 1
    Output: ["()"]

    * @param {number} n
    * @return {string[]}
*/


const generateParentheses = n => {

    const addParens = (openCnt, closeCnt, curList) => {
        if (!openCnt) {
            while (closeCnt) {
                curList.push(")")
                --closeCnt
            }

            parens.push(curList)

        } else if (closeCnt < openCnt) { // Invalid situation. Backtrack.
            return

        } else {
            // Add open or closed parenthese. See what happens.
            addParens(openCnt-1, closeCnt, [...curList, "("])
            addParens(openCnt, closeCnt-1, [...curList, ")"])
        }
    }

    const parens = []
    const curList = ["("]
    addParens(n-1, n, curList)

    return parens
}


function printParens(parens) {
    const strs = parens.map(strArray => strArray.join(""))
    console.log(strs)
}


printParens(generateParentheses(3))
printParens(generateParentheses(4))


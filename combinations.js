// Combinations  Leet Code 77

/*
    Given two integers n and k, return all possible combinations 
    of k numbers out of the range [1, n].

    You may return the answer in any order.

    Example 1:

    Input: n = 4, k = 2
    Output:
    [
    [2,4],
    [3,4],
    [2,3],
    [1,2],
    [1,3],
    [1,4],
    ]

    Example 2:

    Input: n = 1, k = 1
    Output: [[1]]


 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

 const combine = function(n, k) {

    const addList = (curList, startNum, elemsLeft) => {
        if (!elemsLeft || startNum > n) {
            if (curList.length === k) combos.push(curList)
            return
        }

        for (let i=startNum; i<=n; ++i) {
            addList([...curList, i], i+1, elemsLeft-1)
        }
    }

    const combos = []
    addList([], 1, k)

    return combos
}

console.log("n = 4, k = 2", combine(4,2))
console.log("n = 5, k = 2", combine(5,2))
console.log("n = 5, k = 3", combine(5,3))


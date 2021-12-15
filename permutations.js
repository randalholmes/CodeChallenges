// Permutations  Leet Code 46

/* 
    Given an array "nums" of distinct integers, return all the 
    possible permutations. You can return the answer in any order.

    Example 1:

    Input: nums = [1,2,3]
    Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

    Example 2:

    Input: nums = [0,1]
    Output: [[0,1],[1,0]]


 * @param {number[]} nums
 * @return {number[][]}
 */

/*
    My Solution: 
    
    For each element in the list, add the first element
    to a partial permutation. Pass the partial permutation and the list
    minus the first element to a recursive function that keeps reduing the
    list down to two elements. When we have two elements we can add them to 
    the partial permutation creating a full permutation, and then swap the 
    positions of the two elements which we then add to the partial creating
    a second full permutation.

*/

 const permute = nums => {
    const answers = []

    for (let i=0; i<nums.length; ++i) {
        let nextPerm = [nums[0]]
        let nextList = [...nums]
        nextList.shift()
        permuate(answers, nextList, nextPerm)
        nums.push(nums.shift())  // rotate list
    }

    return answers
 }

 function permuate(answers, curList, curPerm) {
    if (curList.length === 2) {
        answers.push([...curPerm, ...curList])
        curList.push(curList.shift())  // rotate list
        answers.push([...curPerm, ...curList])
    } else {
        for (let i=0; i<curList.length; ++i) {
            let nextPerm = [...curPerm, curList[0]]
            let nextList = [...curList]
            nextList.shift()
            permuate(answers, nextList, nextPerm)
            curList.push(curList.shift())  // rotate list
        }
    }
 }


console.log("3 values = 6 permutations", permute([1,2,3]))

console.log("4 values = 24 permutations", permute([1,2,3,4]))
console.log(permute([1,2,3,4]).length)

console.log("5 values = 120 permutations", permute([1,2,3,4,5]))
console.log(permute([1,2,3,4,5]).length)

console.log("Some letters", permute(['A','B','C','D']))


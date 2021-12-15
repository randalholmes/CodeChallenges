// Invert Binary Tree. Leet code 226

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/* 
    Input: root = [4,2,7,1,3,6,9]
    Output: [4,7,2,9,6,3,1]

    Input: root = [2,1,3]
    Output: [2,3,1]

    Constraints:

    The number of nodes in the tree is in the range [0, 100]
*/

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// Inverts Binary Sorted Tree
const invertTree = root => {
    swap(root)
    return root
}

// Swaps child nodes. left->right and right->left
function swap(node) {
    if (!node) return

    swap(node.left)
    swap(node.right)

    const tmp = node.left
    node.left = node.right
    node.right = tmp
}

class Node {
    constructor(val=null) {
        this.val = val
        this.right = null
        this.left = null
    }
}

// Adds values to BST
function treeAddVal(node=null, val=null) {
    if (val < node.val) {
        if (!node.left) {
            node.left = new Node(val)
        } else {
            treeAddVal(node.left, val)
        }
        
    } else if (val > node.val) {
        if (!node.right) {
            node.right = new Node(val)
        } else {
            treeAddVal(node.right, val)
        }
    }
}

// Convert and array of values into a BST
function arrayToBST(vals=[null]) {
    const root = new Node(vals.shift()) // note: alters passed in array.
    vals.forEach( val => treeAddVal(root, val))
    return root
}

// Takes the root of a BST and returns an in order array of the values.
function bstToArray(root) {
    const vals = []
    getTreeVals(root, vals)
    return vals
}

// Adds node.val to vals array
function getTreeVals(node, vals) {
    if (!node) return
    getTreeVals(node.left, vals)
    vals.push(node.val)
    getTreeVals(node.right, vals)
    
}


// Input: root = [4,2,7,1,3,6,9]
//     Output: [4,7,2,9,6,3,1]

let vals = [4,2,7,1,3,6,9]
let root = arrayToBST(vals)
console.log(bstToArray(root)) // [1,2,3,4,6,7,9]
invertTree(root)
console.log(bstToArray(root)) // [9,7,6,4,3,2,1]


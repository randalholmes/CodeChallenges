// addTwoLLNumbers.js  leet 2

/**
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a
single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except
the number 0 itself.


 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} link1
 * @param {ListNode} link2
 * @return {ListNode}
 */


function addTwoNumbers(link1, link2) {
  let rootNode, next, prev, sum, carry, val1, val2;

  val1 = link1.val;
  val2 = link2.val;
  carry = 0;
  while (true) {
    sum = val1 + val2 + carry;
    if (sum > 9) {
      sum = sum % 10;
      carry = 1;
    } else {
      carry = 0;
    }

    // Add sum to returned linked list
    if (rootNode === undefined) {
      rootNode = new ListNode(sum);
      prev = rootNode;
    } else {
      next = new ListNode(sum);
      prev.next = next;
      prev = next;
    }

    // Increment linklist 1 to next node if available.
    if (link1.next === null) {
      val1 = 0;
    } else {
      link1 = link1.next;
      val1 = link1.val;
    }

    // Increment linklist 2 to next node if available.
    if (link2.next === null) {
      val2 = 0;
    } else {
      link2 = link2.next;
      val2 = link2.val;
    }

    // Check if at the end of both linked lists
    if (link1.next === null && link2.next === null){
      // There may be values yet to sum.
      if (val1 > 0 || val2 > 0) {
        continue;
      }

      // There may be a carry value remaining.
      if (carry > 0) {
        prev.next = new ListNode(carry);
      }

      return rootNode;
    }
  } //while end
}

// Creates Nodes for linked lists.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

// Helper function to create a linked list from an Array of numbers.
function makeLinkedLists(numbers){
  let rootNode = new ListNode(numbers.shift());
  let prev = rootNode;
  for (let num of numbers) {
    next = new ListNode(num);
    prev.next = next;
    prev = next;
  }

  return rootNode;
}

// Converts linked list to an Array of numbers for console logging.
function LLtoArray(linklist) {
  let nums = [];
  while (true) {
    nums.push(linklist.val);
    if (linklist.next === null) break;
    linklist = linklist.next;
  }

  return nums;
}

// test Array to linkedlist back to Array functions.
console.log(LLtoArray(makeLinkedLists([1,2,4,7])));

//**     Test Data     **//

let link1 = makeLinkedLists([2,4,3]);
let link2 = makeLinkedLists([5,6,4]);
let linkSum = addTwoNumbers(link1, link2);
console.log(LLtoArray(linkSum)); // [7,0,8]

link1 = makeLinkedLists([9,9,9,9,9,9,9]);
link2 = makeLinkedLists([9,9,9,9]);
linkSum = addTwoNumbers(link1, link2);
console.log(LLtoArray(linkSum)); // [8,9,9,9,0,0,0,1]



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 *
 * @param {ListNode} head
 * @return {ListNode}
 */





class Node {
    constructor(val=null, next=null) {
        this.val = val
        this.next = next
    }
}

const makeList = size => {
    const head = new Node(1)
    let cur = head

    for (val=2; val<=size; ++val) {
        cur.next = new Node(val)
        cur = cur.next
    }

    return head
}

const makeListFromArray = (arr=[]) => {
    const head = new Node(arr.shift())
    arr.reduce((acc, val) => acc.next = new Node(val), head)
    return head
}


const printLL = head => {
    console.log("Linked List Contents")
    do {
        console.log(head.val)
        head = head.next
    } while (head)
}

const oddEvenList = function(head) {
    const oddHead = head
    head = head.next
    if (!head) return oddHead

    const evenHead = head
    head = head.next
    
    let curOdd = oddHead
    let curEven = evenHead
    while (head) {
        curOdd.next = head
        curOdd = curOdd.next
        head = head.next
        if (!head) break

        curEven.next = head
        curEven = curEven.next
        head = head.next
    }

    curEven.next = null
    curOdd.next = evenHead
    return oddHead
}

// printLL(makeListFromArray([4,7,2,4,9]))
// printLL(makeList(10))

printLL(oddEvenList(makeList(5)))
printLL(oddEvenList(makeListFromArray([2,1,3,5,6,4,7])))



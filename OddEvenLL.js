// Odd Even Linked List.  Leet 328

/*
    Given the head of a singly linked list, group all the nodes with odd indices together 
    followed by the nodes with even indices, and return the reordered list.

    The first node is considered odd, and the second node is even, and so on.

    Note that the relative order inside both the even and odd groups should remain 
    as it was in the input.

    You must solve the problem in O(1) extra space complexity and O(n) time complexity.


 * @param {ListNode} head
 * @return {ListNode}
 */

 const oddEvenList = function(head = new Node()) {
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



// printLL(makeListFromArray([4,7,2,4,9]))
// printLL(makeList(10))

printLL(oddEvenList(makeList(5)))
printLL(oddEvenList(makeListFromArray([2,1,3,5,6,4,7])))



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let reverse = makeReverse(head);
    let original = head;

    while (original) {
        if (original.val !== reverse.val) return false;
        reverse = reverse.next;
        original = original.next;
    }
    return true;
};

var makeReverse = function(head) {
    let current = head;
    let newHead = null;

    while (current) {
        temp = new ListNode(current.val)
        temp.next = newHead;
        newHead = temp;
        current = current.next
    }

    return newHead;
}

// O(1) space

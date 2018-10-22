/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let current1;
    let current2;
    let cur;
    let head;

    if (l1 === null) return l2;
    if (l2 === null) return l1

    if (l1.val <= l2.val) {
        head = l1;
        cur = l1;
        current1 = l1.next;
        current2 = l2;
    } else {
        cur = l2;
        head = l2;
        current2 = l2.next;
        current1 = l1;
    }


    while (current1 && current2) {
        if (current1.val <= current2.val) {
            cur.next = current1;
            cur = current1;
            current1 = current1.next;
        } else {
            cur.next = current2;
            cur = current2;
            current2 = current2.next;
        }

    }

    current1 ? cur.next = current1 : cur.next = current2;

    return head;
};

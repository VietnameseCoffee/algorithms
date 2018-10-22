/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
    let count = 0;
    let current = head;
    let set = false;

    if (G.length === 0) return 0;

    while (current) {
        if (G.indexOf(current.val) !== -1 && !set) {
            sets += 1;
            set = true
        } else if (G.indexOf(current.val) === -1 && set) {
            set = false;
        }

        current = current.next;
    }

    return count;
};

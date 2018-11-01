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
var addTwoNumbers = function(l1, l2) {
  let carryover = 0;
  let head;
  let current;
  
  while (l1 || l2 || carryover) {
      let val1 = l1 ? l1.val : 0;
      let val2 = l2 ? l2.val : 0;
      let sum = val1 + val2 + carryover;
      
      
      let newNode;
      
      carryover = 0;
      
      if (sum > 9) {
          sum = sum - 10;
          carryover++;
      }
      newNode = new ListNode(sum);

      if (head) {
          current.next = newNode;
          current = newNode;
      } else {
          head = newNode;
          current = newNode;
      }

      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
  }
  
  return head;
};
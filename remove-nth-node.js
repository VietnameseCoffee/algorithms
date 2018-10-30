/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  counter = 0;
  
  current = head;
  while (current) {
      counter += 1
      current = current.next; 
  }
  
  counter -= n;
  if (counter < 0) return;
  
  prev = null;
  current = head;
  while (current) {
      if (counter === 0) { 
          next = current.next;
          current.next = null
          prev ? prev.next = next : head = next;
          return head;
      }
      prev = current;
      current = current.next
      counter -= 1;
  }
};

// One pass

var removeNthFromEndOnePass = function(head, n) {
  const nodes = [];
  
  current = head;
  while (current) {
      nodes.push(current);
      current = current.next; 
  }
  
  if (n > nodes.length) return null;
  
  let tar = nodes.length - n;
  let doom = nodes[tar]
  let prev = nodes[tar - 1];
  let next = nodes[tar + 1] || null;
  
  
  doom.next = null;
  if (head.next === null) return next;
  prev.next = next;
  
  return head;

};
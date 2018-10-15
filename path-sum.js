/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

var hasPathSum = function(root, sum) {
  if (!root) {
      return false;
  }
  return traversal(root, sum, 0);
};

var traversal = function(node, sum, current) {
  if (!node.left && !node.right) {
      return sum === (current + node.val);
  }
  
  const currentSum = current + node.val;
  
  if (node.left) {
      if (traversal(node.left, sum, currentSum)) {
          return true;
      }
  }
  if (node.right) {
      if (traversal(node.right, sum, currentSum)) {
          return true;
      } 
  }
  
  return false;
}
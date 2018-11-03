/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null) return null;
  
  let left = root.left;
  let right = root.right;
  
  root.left = invertTree(right);
  root.right = invertTree(left);
  
  return root;
};
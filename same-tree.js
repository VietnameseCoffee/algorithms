/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
  let a = traverseTree(p)
  let b = traverseTree(q)
  
  if (a.length !== b.length) return false;
  
  for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
  }
  
  return true;
};

var traverseTree = function(root) {
  if (root === null) return [null];
  
  let result = [root.val]
  
  let left = traverseTree(root.left);
  result = result.concat(left);
  let right = traverseTree(root.right);
  result = result.concat(right);
  
  return result;
}
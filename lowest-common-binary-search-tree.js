/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root) {
      return null
  }
  if (root === p || root === q) {
      return root
  }

  let leftSideTree = lowestCommonAncestor(root.left, p, q)
  let rightSideTree = lowestCommonAncestor(root.right, p, q)

  if (leftSideTree && rightSideTree) {
      return root
  } else if (leftSideTree) {
      return leftSideTree
  } else {
      return rightSideTree
  }
};
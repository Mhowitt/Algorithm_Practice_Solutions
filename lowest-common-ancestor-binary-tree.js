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
  if (root === null || p === root || q === root) {
      return root;
  }

  let leftSide = lowestCommonAncestor(root.left, p, q);
  let rightSide = lowestCommonAncestor(root.right, p, q);

  if (leftSide !== null && rightSide !== null) {
      return root;
  } else if (leftSide) {
      return leftSide
  } else {
      return rightSide
  }

};
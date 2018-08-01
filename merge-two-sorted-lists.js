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
  let mergedList = new ListNode(0);
  let nodeToRemove = mergedList;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      mergedList.next = l1;
      l1 = l1.next;
    } else {
      mergedList.next = l2;
      l2 = l2.next;
    }
    mergedList = mergedList.next;
  }

  if (l1) {
    mergedList.next = l1;
  }
  if (l2) {
    mergedList.next = l2;
  }

  return nodeToRemove.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */



function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0); // Dummy node to form the result list
  let current = dummyHead; // Pointer to build the result list
  let carry = 0; // To keep track of carry from each addition
  
  // Iterate as long as either l1 or l2 exists or there's a carry
  while (l1 !== null || l2 !== null || carry !== 0) {
    // Get the current values from l1 and l2, or 0 if they've been fully traversed
    let val1 = l1 !== null ? l1.val : 0;
    let val2 = l2 !== null ? l2.val : 0;
    
    // Calculate the sum and the carry
    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10); // Carry will be the tens place digit
    let digit = sum % 10; // Current digit is the remainder
    
    // Append the result digit to the list
    current.next = new ListNode(digit);
    current = current.next; // Move the pointer to the next
    
    // Move to the next nodes in l1 and l2 if they exist
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  
  // Return the next node of the dummy head (since it's just a placeholder)
  return dummyHead.next;
}

// Example usage:
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

const result = addTwoNumbers(l1, l2);

// Function to print the list
function printList(node) {
  let output = [];
  while (node !== null) {
    output.push(node.val);
    node = node.next;
  }
  console.log(output);
}

printList(result);
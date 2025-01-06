

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null; // Start of the queue (front)
    this.tail = null; // End of the queue (rear)
  }

  /**
   * Returns the underlying linked list structure.
   */
  getUnderlyingList() {
    return this.head;
  }

  /**
   * Adds an element at the end of the queue.
   * @param {Number} value
   */
  enqueue(value) {
    const newNode = new ListNode(value); // Create a new node with the given value

    if (!this.tail) {
      // If the queue is empty, both head and tail point to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the queue already has elements, add the new node at the end
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  /**
   * Removes and returns the value at the front of the queue.
   * If the queue is empty, returns undefined.
   */
  dequeue() {
    if (!this.head) {
      return undefined; // Queue is empty
    }

    const dequeuedValue = this.head.value; // Store the value to return
    this.head = this.head.next; // Move the head to the next node

    if (!this.head) {
      // If the queue is empty after removal, reset the tail
      this.tail = null;
    }

    return dequeuedValue;
  }
}
module.exports = {
  Queue
};

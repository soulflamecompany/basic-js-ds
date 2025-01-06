

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = []; // Initialize an array to store stack elements
  }

  push(element) {
    this.items.push(element); // Add the element to the end of the array
  }

  pop() {
    return this.items.pop(); // Remove and return the top-most element (or undefined if empty)
  }

  peek() {
    return this.items[this.items.length - 1]; // Return the top-most element without removing it
  }
}


module.exports = {
  Stack
};

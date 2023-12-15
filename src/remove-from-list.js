const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(elem) {
    if (this.length === 0) {
      this.head = new ListNode(elem);
    }  else {
      let present = this.head;
      while (present.next) {
        present = present.next
      }
      present.next = new ListNode(elem);
    }
    this.length++
  }

  remove(elem) {
    let present = this.head;
    let prev = null;

    while (present.value != elem) {
      prev = present;
      current = present.next;
    };

    prev.next = present.next;
    this.length--;
  }
}

function removeKFromList(l, k) {
  let present = l;
  let prev = null

  while(present) {
    if (present.value === k) {
      if (prev) {
        prev.next = present.next
      } else {
        l = present.next;
      }
    } else {
      prev = present;
    }
    present = present.next
  }

  return l;
}

module.exports = {
  removeKFromList
};
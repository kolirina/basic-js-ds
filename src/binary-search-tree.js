const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addIn(this.rootNode, data);

    function addIn(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.smaller = addIn(node.smaller, value);
      } else {
        node.bigger = addIn(node.bigger, value);
      }

      return node;
    }
  }

  has(data) {
    return search(this.rootNode, data);

    function search(node, value) {
      if (!node) {
        return false
      }

      if (node.data === value) {
        return true;
      }

      return value < node.data ?
      search(node.smaller, value) :
      search(node.bigger, value);
    }
  }


  find(data) {
    if (!this.has(data)) {
      return null;
    }
    if (this.has(data)) {
      return new Node(data);
    }
  }

  remove(data) {
    this.rootNode = removeIn(this.rootNode, data);

    function removeIn(node, value) {
      if (!node) {
        return false;
      }

      if (value < node.data) {
        node.smaller = removeIn(node.smaller, value);
        return node;
      } else if (value > node.data) {
        node.bigger = removeIn(node.bigger, value);
        return node;
      } else {
        if (!node.smaller && !node.bigger) {
          return null;
        };

        if (!node.smaller) {
          node = node.bigger;
          return node;
        }

        if (!node.bigger) {
          node = node.smaller;
          return node;
        }

        let minFromRight = node.bigger;
        while (minFromRight.smaller) {
          minFromRight = minFromRight.smaller;
        } 

        node.data = minFromRight.data;

        node.bigger = removeIn(node.bigger, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    let current = this.rootNode;

    while (current.smaller) {
      current = current.smaller;
    }

    return current.data;
  }

  max() {
    let current = this.rootNode;

    while (current.bigger) {
      current = current.bigger;
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};
class Node {
  constructor(val, next, prev) {
    this.value = val;
    this.next = next;
    this.prev = prev;
  }
}

export class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFromHead(val) {
    const node = new Node(val, this.head ? { ...this.head } : null);
    console.log("node created:", val, node);
    if (this.head) {
      this.head.next = node;
    } else {
      console.log("here");
      this.tail = node;
    }
    this.head = node;
    console.log("this.head here", this.head);
  }

  insertFromTail(val) {
    const node = new Node(val, this.tail ? { ...this.tail } : null);
    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
  }

  print() {
    let node = { ...this.head };
    let str = "";
    while (node) {
      str += node.value + " -> ";
      node = node.next;
    }
    document.getElementById("printDiv").innerHTML = str;
  }
}

export class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFromHead(val) {
    const node = new Node(val, this.head ? { ...this.head } : null, null);
    if (this.head) {
      this.head.prev = node;
    } else {
      this.tail = node;
    }
    this.head = node;
  }

  insertFromTail(val) {
    const node = new Node(val, null, this.tail ? { ...this.tail } : null);
    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
  }

  print() {
    let node = { ...this.head };
    let str = "";
    while (node) {
      str += node.value + " -> ";
      node = node.next;
    }
    document.getElementById("printDiv").innerHTML = str;
  }

  reversePrint() {
    let node = { ...this.tail };
    let str = "";
    while (node) {
      str += node.value + " <- ";
      node = node.prev;
    }
    document.getElementById("printDiv").innerHTML = str;
  }
}

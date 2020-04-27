export default class InputClass {
  constructor(arr, length = 10) {
    this.arr = [];
    if (arr && arr.constructor === Array && arr.length) {
      this.arr = arr;
    } else if (length) {
      for (let i = 0; i < length; i++) {
        this.arr[i] = Math.floor(Math.random() * 10);
      }
    }
  }
  getInput() {
    // return a shallow copy of array to avoid mutation
    return [...this.arr];
  }

  print(node, arr) {
    if (node) {
      let arrayToPrint = arr || this.arr || [];
      node.innerHTML = arrayToPrint.toString();
    }
  }
}

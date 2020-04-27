export default class insertionSort {
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

  sort() {
    for (let i = 1; i < this.arr.length; i++) {
      let j = i - 1;
      let key = this.arr[i];
      while (j >= 0 && this.arr[j] > key) {
        this.arr[j + 1] = this.arr[j];
        j--;
      }
      this.arr[j + 1] = key;
    }
  }

  print(node) {
    if (node) {
      node.innerHTML = this.arr.toString();
    }
  }
}

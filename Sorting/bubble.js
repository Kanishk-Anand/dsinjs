import InputClass from "./input.js";

export default class Bubble extends InputClass {
  constructor(arr) {
    super(arr);
  }

  sort() {
    let isSorted = false;
    // this is for breaking the loop in case array gets sorted
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < this.arr.length - 1; i++) {
        if (this.arr[i] > this.arr[i + 1]) {
          // sending values won't work because it'll be passed as value, rather than reference
          this.swap(i, i + 1);
          isSorted = false;
        }
      }
    }
  }
  swap(a, b) {
    let temp = this.arr[a];
    this.arr[a] = this.arr[b];
    this.arr[b] = temp;
  }
}

import insertionSort from "./insertion.js";
import bubbleSort from "./bubble.js";

function getUserInput() {
  let userInput = document.getElementById("userInput").value || "";
  if (userInput.indexOf(",") > 0) {
    userInput = userInput.split(",").map((item) => +item);
  }
  return userInput;
}

function sort() {
  const userInput = getUserInput();
  //const insSortObj = new insertionSort(userInput);
  const bubbleObj = new bubbleSort(userInput);
  bubbleObj.sort();
  bubbleObj.print(document.getElementById("printDiv"));
}

window.sort = sort;

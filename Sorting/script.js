import insertionSort from "./insertion.js";

function getUserInput() {
  let userInput = document.getElementById("userInput").value || "";
  if (userInput.indexOf(",") > 0) {
    userInput = userInput.split(",").map((item) => +item);
  }
  return userInput;
}

function sort() {
  const userInput = getUserInput();
  const insSortObj = new insertionSort(userInput);
  insSortObj.sort();
  insSortObj.print(document.getElementById("printDiv"));
}

window.sort = sort;

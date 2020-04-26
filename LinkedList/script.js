import { SLL, DLL } from "./index.js";

const linkedList = new DLL();

function getUserInput() {
  let userInput = document.getElementById("userInput").value || "";
  if (userInput.indexOf(",") > 0) {
    userInput = userInput.split(",");
  }
  return userInput;
}

function insertFromHead() {
  const userInput = getUserInput();
  if (userInput.constructor === Array) {
    userInput.forEach((item) => linkedList.insertFromHead(item));
  } else {
    linkedList.insertFromHead(userInput);
  }
}
function insertFromTail() {
  const userInput = getUserInput();
  if (userInput.constructor === Array) {
    userInput.forEach((item) => linkedList.insertFromTail(item));
  } else {
    linkedList.insertFromTail(userInput);
  }
}
function print() {
  linkedList.print();
}
function reversePrint() {
  linkedList.reversePrint();
}

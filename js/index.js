import dogsData from "./data.js";
import Dog from "./Dog.js";

let currentIndex = 0;
let currentDog = new Dog(dogsData[currentIndex]);
let endOfPile = false;
const rejectBtn = document.querySelector("#reject-button");
const acceptBtn = document.querySelector("#accept-button");

function init() {
  currentDog.render();
  rejectBtn.addEventListener("click", reject);
  acceptBtn.addEventListener("click", accept);
}

function reject() {
  processStatus(false, 'reject');
}

function accept() {
  processStatus(true, 'accept');
}

function processStatus(match, status) {
  if (!endOfPile) {
    currentDog.updateMatchStatus(match);
    document.querySelector(`.${status}-badge`).classList.add("show");
    setTimeout(getNewDog, 1000);
  }
}

function getNewDog() {
  if (currentIndex >= dogsData.length - 1) {
    endOfPile = true;
    displayEndOfPileMsg();
    return;
  }

  currentIndex += 1;
  currentDog = new Dog(dogsData[currentIndex]);
  currentDog.render();
}

function displayEndOfPileMsg() {
  document.querySelector("main").innerHTML = `
    <h3 class="msg">There are no more dogs around this area.</h3>
  `;
}

init();

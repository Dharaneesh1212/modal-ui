"use strict";

const buttonOneEl = document.getElementById("button-one");
const buttonTwoEl = document.getElementById("button-two");
const buttonThreeEl = document.getElementById("button-three");
const buttonCloseEl = document.getElementById("close-button");
const modalUiEl = document.getElementById("modal-ui");

const hide = function () {
  modalUiEl.classList.add("close");
};

function button() {
  buttonOneEl.addEventListener("click", () => {
    modalUiEl.classList.remove("close");
    modalUiEl.classList.add("open");
  });

  buttonTwoEl.addEventListener("click", () => {
    modalUiEl.classList.remove("close");
    modalUiEl.classList.add("open");
  });

  buttonThreeEl.addEventListener("click", () => {
    modalUiEl.classList.remove("close");
    modalUiEl.classList.add("open");
  });
}

buttonCloseEl.addEventListener("click", () => {
  modalUiEl.classList.remove("open");
  modalUiEl.classList.add("close");
});

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    modalUiEl.classList.remove("open");
    modalUiEl.classList.add("close");
  }
});

button();

hide();

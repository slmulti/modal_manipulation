"use strict";

//maniplulating classes

const modalVar = document.querySelector(".modal");
const overlayVar = document.querySelector(".overlay");
const btnCloseModalVar = document.querySelector(".close-modal");
const btnsOpenModalVar = document.querySelectorAll(".show-modal");
console.log(btnsOpenModalVar);

const openModal = function () {
    modalVar.classList.remove("hidden");
    overlayVar.classList.remove("hidden");
};

const closeModal = function () {
    modalVar.classList.add("hidden");
    overlayVar.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModalVar.length; i++) {
    btnsOpenModalVar[i].addEventListener("click", openModal);
}

//close modal with corner x
btnCloseModalVar.addEventListener("click", closeModal);

//close modal clicking on the overlay, anything not in the modal
overlayVar.addEventListener("click", closeModal);

//close modal using just the ESC key
document.addEventListener("keydown", function (e) {
    // console.log(e.key);
    if (e.key === "Escape" && !modalVar.classList.contains("hidden")) {
        closeModal();
    }
});

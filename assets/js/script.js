'use strict';

/* Selecting the elements from the DOM. */
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

/**
 * It removes the hidden class from the modal and overlay.
 */
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

/**
 * When the user clicks on the close button, hide the modal and the overlay.
 */
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

/* A for loop that is looping through the btnsOpenModal array and adding an event listener to each button and invoke openModal function on click. */
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

/* Adding an event listener to the close button and the overlay. When the user clicks on the close button or the overlay, the closeModal function is invoked. */
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/* Listening for the keydown event and if the key is Escape, it will close the modal. */
document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

/* Listening for a keydown event and when it happens, it logs the event object to the console. */
// document.addEventListener('keydown', function (e) {
//     console.log(e);
//     console.log(e.key);
// });

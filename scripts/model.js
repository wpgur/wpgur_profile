const openButton = document.querySelector('.btn-open-popup');
const modal = document.querySelector('.modal');
const modalBackground = modal.querySelector('.modal__background');

function displayModal() {
  modal.classList.toggle('hidden');
}

openButton.addEventListener('click', displayModal);
modalBackground.addEventListener('click', displayModal);

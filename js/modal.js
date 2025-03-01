
const modal = document.querySelector('.backdrop');
const ModalBtnOpen = document.querySelector('.modal-btn-open');
const ModalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle("is-hidden");

ModalBtnOpen.addEventListener('click', toggleModal);
ModalBtnClose.addEventListener('click', toggleModal);
import { Card } from './Card.js';
import { initialCards } from './initialCards.js';
import { FormValidator } from './FormValidator.js';


const CONFIG = {
  formSelector: '.form',
  inputSelector: '.form__input',
  buttonSelector: '.form__submit',
  inputErrorClass: 'form__input_type_error',
  disabledButtonClass: 'form__submit_inactive',
  templateSelector: '#template'
};


const profileEditButton = document.querySelector('.profile__edit');
const buttonAddPhoto = document.querySelector('.profile__add-button');
const popupRedactorProfile = document.querySelector(
  '.popup_target_redactor-profile'
);
const popupAddPhoto = document.querySelector('.popup_target_add-photo');
const popupOpenPhoto = document.querySelector('.popup_terget_add-photo');

const inputProfileName = document.querySelector('.form__input_field_name');
const inputProfileAbout = document.querySelector('.form__input_field_about');

const redactorProfileForm = popupRedactorProfile.querySelector('.form');
const formAddPhoto = popupAddPhoto.querySelector('.form');

const inputCardName = formAddPhoto.querySelector('.form__input_card_name');
const inputCardLink = formAddPhoto.querySelector('.form__input_card_link');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const gallery = document.querySelector('.gallery');
const template = document.querySelector(CONFIG.templateSelector).content;

const buttonsDelete = document.querySelectorAll('.photo-card__delete');

const popupPhoto = document.querySelector('.photo-popup__photo');
const popupPhotoTitle = document.querySelector('.photo-popup__title');

const profileEditClosedButton = document.querySelectorAll('.popup__close-icon');

const popups = document.querySelectorAll('.popup');

const forms = document.querySelectorAll('.form');
const formList = Array.from(forms);
formList.forEach((form) => {
  new FormValidator(CONFIG, form).enableValidation()
});

function escapeKeyHandler(event) {
  const popupOpen = findOpenPopup();
  if (event.key === 'Escape') {
    closePopup(popupOpen);
  }
}

function render() {
  initialCards.forEach((card) => {
    const newCard = new Card(card, CONFIG.templateSelector).creatNewCard();
    inseretCard(gallery, newCard);
  });
}

// открыть попап, найти кнопку закрытия
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escapeKeyHandler);

  if (popup === popupRedactorProfile) {
    inputProfileName.value = profileName.textContent;
    inputProfileAbout.value = profileAbout.textContent;
  }
}

function findOpenPopup() {
  const openPopup = document.querySelector('.popup_opened');
  return openPopup;
}

// добавление карты в разметку
function inseretCard(container, newCard) {
  container.prepend(newCard);
}

function addPhoto(event) {
  event.preventDefault();
  const form = event.target
  const card = {};
  card.name = inputCardName.value;
  card.link = inputCardLink.value;
  form.reset()
  const newCard = new Card(card, CONFIG.templateSelector).creatNewCard();
  inseretCard(gallery, newCard);
  new FormValidator(CONFIG, form).disableButton()
  closePopup(popupAddPhoto);
}

// Закрыть popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escapeKeyHandler);
}

// сохранить изменения в редакторе профиля
function saveRedactorProfile(event) {
  event.preventDefault();
  closePopup(popupRedactorProfile);
  profileName.textContent = inputProfileName.value;
  profileAbout.textContent = inputProfileAbout.value;
}

export function openPhoto(event) {
  const photoCard = event.target;
  const photoTitle = event.target
    .closest('.photo-card')
    .querySelector('.photo-card__name');
  popupPhoto.src = photoCard.src;
  popupPhoto.alt = photoTitle.textContent;
  popupPhotoTitle.textContent = photoTitle.textContent;
  openPopup(event, popupOpenPhoto);
}

buttonAddPhoto.addEventListener('click', () => openPopup(popupAddPhoto));
profileEditButton.addEventListener('click', () => openPopup(popupRedactorProfile));
redactorProfileForm.addEventListener('submit', (event) => saveRedactorProfile(event));
formAddPhoto.addEventListener('submit', (event) => addPhoto(event));
profileEditClosedButton.forEach((button) =>
  button.addEventListener('click', function () {
    const openPopup = findOpenPopup();
    closePopup(openPopup);
  })
);

popups.forEach((popup) => {
  popup.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
      closePopup(popup);
    }
  });
});

render();

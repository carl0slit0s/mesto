import { Card } from '../components/Card.js';
import { initialCards } from '../utils/initialCards.js';
import { FormValidator } from '../components/FormValidator';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';

import {
  profileEditButton,
  buttonAddPhoto,
  popupAddPhotoSelector,
  popupOpenPhotoSelector,
  inputProfileName,
  inputProfileAbout,
  formAddPhoto,
  inputCardName,
  inputCardLink,
  profileNameSelector,
  profileAboutSelector,
  gallery,
  forms,
  popupRedactorProfileSelector,
  popupPhotoTitleSelector
} from '../utils/constants.js'

import './index.css'

const CONFIG = {
  formSelector: '.form',
  inputSelector: '.form__input',
  buttonSelector: '.form__submit',
  inputErrorClass: 'form__input_type_error',
  disabledButtonClass: 'form__submit_inactive',
  templateSelector: '#template',
};


const formList = Array.from(forms);
formList.forEach((form) => {
  new FormValidator(CONFIG, form).enableValidation();
});

// сохранить изменения в редакторе профиля
const saveRedactorProfile = (data) => {
  userInfo.setUserInfo(data.name, data.about);
  redactorProfilePopup.close();
};


// добавление карты в разметку
function inseretCard(container, newCard) {
  container.prepend(newCard);
}

function creatCard(cardData) {
  const cardElement = new Card(cardData, CONFIG.templateSelector, () => {
    photoPopup.open(cardData.name, cardData.link);
  }).creatNewCard();
  return cardElement;
}

function addPhoto(data) {
  const cardData = {};
  cardData.name = inputCardName.value;
  cardData.link = inputCardLink.value;
  const newCard = creatCard({
    name: data['place-name'],
    link: data['photo-link'],
  });
  inseretCard(gallery, newCard);
  formAddPhotoValid.disableButton();
  addPhotoPopup.close();
}

buttonAddPhoto.addEventListener('click', () => {
  addPhotoPopup.open();
});
profileEditButton.addEventListener('click', () => {
  const userInfoData = userInfo.getUserInfo();
  inputProfileName.value = userInfoData.name;
  inputProfileAbout.value = userInfoData.about;
  redactorProfilePopup.open();
});

const formAddPhotoValid = new FormValidator(CONFIG, formAddPhoto);

const cardList = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const cardElement = creatCard(cardData);

      cardList.addItem(cardElement);
    },
  },
  gallery
);

const userInfo = new UserInfo({
  userNameSelector: profileNameSelector,
  userAboutSelector: profileAboutSelector,
});
const photoPopup = new PopupWithImage(
  popupOpenPhotoSelector,
  popupPhotoTitleSelector
);
const redactorProfilePopup = new PopupWithForm(
  popupRedactorProfileSelector,
  saveRedactorProfile
);
const addPhotoPopup = new PopupWithForm(popupAddPhotoSelector, addPhoto);

photoPopup.setEventListeners();
redactorProfilePopup.setEventListeners();
addPhotoPopup.setEventListeners();

cardList.renderItems();
import { Card } from '../components/Card.js';
import { initialCards } from '../utils/initialCards.js';
import { FormValidator } from '../components/FormValidator';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';

import {
  CONFIG,
  profileEditButton,
  buttonAddPhoto,
  popupAddPhotoSelector,
  popupOpenPhotoSelector,
  inputProfileName,
  inputProfileAbout,
  profileNameSelector,
  profileAboutSelector,
  gallery,
  forms,
  popupRedactorProfileSelector,
  popupPhotoTitleSelector,
} from '../utils/constants.js';

import './index.css';


const formValidators = {};
function enableValidation(config) {
  const formList = Array.from(forms);
  formList.forEach((form) => {
    const validator = new FormValidator(config, form);
    const formName = form.getAttribute('name')
    formValidators[formName] = validator
    validator.enableValidation()
  });
}
enableValidation(CONFIG)

// сохранить изменения в редакторе профиля
const saveRedactorProfile = (data) => {
  userInfo.setUserInfo(data.name, data.about);
  redactorProfilePopup.close();
};

// добавление карты в разметку
function inseretCard(newCard) {
  cardList.addItem(newCard)
}

function creatCard(cardData) {
  const cardElement = new Card(cardData, CONFIG.templateSelector, () => {
    photoPopup.open(cardData.name, cardData.link);
  }).creatNewCard();
  return cardElement;
}

function addPhoto(data) {
  const newCard = creatCard({
    name: data['place-name'],
    link: data['photo-link'],
  });
  inseretCard(newCard);
  addPhotoPopup.close();
}

buttonAddPhoto.addEventListener('click', () => {
  addPhotoPopup.open();
  formValidators['add-card'].disableButton();
});

profileEditButton.addEventListener('click', () => {
  const userInfoData = userInfo.getUserInfo();
  inputProfileName.value = userInfoData.name;
  inputProfileAbout.value = userInfoData.about;
  redactorProfilePopup.open();
});

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

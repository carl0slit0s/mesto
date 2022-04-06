import { Card } from '../components/Card.js';
import { initialCards } from '../utils/initialCards.js';
import { FormValidator } from '../components/FormValidator';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { api } from '../components/Api.js';

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
  formsValid,
  popupRedactorProfileSelector,
  popupPhotoTitleSelector,
  avatar,
  popupDeleteAccept,
  popupDeleteAcceptSelector,
} from '../utils/constants.js';

import './index.css';

api.getProfileData().then((profile) => {
  userInfo.setUserInfo(profile.name, profile.about);
  avatar.src = profile.avatar;
});

api.getCards().then((cardDataList) => {
  cardDataList.forEach((cardData) => {
    const card = creatCard(cardData);
    inseretCard(card);
  });
});

const deleteAcceptPopup = new PopupWithForm(popupDeleteAcceptSelector, () => {
  api.deleteCard(id);
});

const formValidators = {};
function enableValidation(config) {
  const formList = Array.from(formsValid);
  formList.forEach((form) => {
    const validator = new FormValidator(config, form);
    const formName = form.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
}
enableValidation(CONFIG);

// userInfo.setUserInfo();

// сохранить изменения в редакторе профиля
const saveRedactorProfile = (data) => {
  api.editProfile(data).then(() => {
    userInfo.setUserInfo(data.name, data.about);
    redactorProfilePopup.close();
  });
};

// добавление карты в разметку
function inseretCard(newCard) {
  cardList.addItem(newCard);
}

function creatCard(cardData) {
  const cardElement = new Card(
    cardData,
    CONFIG.templateSelector,
    () => {
      photoPopup.open(cardData.name, cardData.link);
    },
    (id) => {
      deleteAcceptPopup.open();
      deleteAcceptPopup.chengeHandleSubmit(() => {
        api.deleteCard(id).then((res) => {
          // console.log(cardElement);
          cardElement.deleteCard();
          deleteAcceptPopup.close();
        });
      });
    }
  )
  return cardElement.creatNewCard();
}

// function

function addPhoto(data) {
  api.addCard(data['place-name'], data['photo-link']).then((res) => {
    const newCard = creatCard({
      name: res.name,
      link: res.link,
      likes: res.likes,
      _id: res._id,
    });
    inseretCard(newCard);
    addPhotoPopup.close();
  });
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

const cardList = new Section(
  {
    items: [],
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

deleteAcceptPopup.setEventListeners();

photoPopup.setEventListeners();
redactorProfilePopup.setEventListeners();
addPhotoPopup.setEventListeners();

cardList.renderItems();

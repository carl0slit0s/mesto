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
  // avatar,
  // popupDeleteAccept,
  popupDeleteAcceptSelector,
  popupChangeAvatarSelector,
  profileAvatarSelector,
} from '../utils/constants.js';

import './index.css';

let profileId;
api.getProfileData().then((profile) => {
  // console.log(profile);
  userInfo.setUserInfo(profile.name, profile.about, profile.avatar);
  // avatar.src = profile.avatar;
  profileId = profile._id;
});

api.getCards().then((cardDataList) => {
  cardDataList.forEach((cardData) => {
    const card = creatCard({
      name: cardData.name,
      link: cardData.link,
      likes: cardData.likes,
      _id: cardData._id,
      ownerId: cardData.owner._id,
      profileId: profileId,
    });
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
  redactorProfilePopup.renderLoading(true)
  api.editProfile(data).then(() => {
    //добаваить аватар
    userInfo.updateUserInfo(data.name, data.about);
    redactorProfilePopup.close();
  }).finally(() => redactorProfilePopup.renderLoading(false));;
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
          cardElement.deleteCard();
          deleteAcceptPopup.close();
        });
      });
    },
    (id) => {
      if (cardElement.checkUserLikes()) {
        api.deleteLike(id).then((res) => {
          cardElement.setLikes(res.likes);
        });
      } else {
        api.addLike(id).then((res) => {
          cardElement.setLikes(res.likes);
        });
      }
    }
  );
  return cardElement.creatNewCard();
}

// function

function addPhoto(data) {
  addPhotoPopup.renderLoading(true)
  api.addCard(data['place-name'], data['photo-link']).then((res) => {
    const newCard = creatCard({
      name: res.name,
      link: res.link,
      likes: res.likes,
      _id: res._id,
      ownerId: res.owner._id,
      profileId: profileId,
    });
    inseretCard(newCard);
    addPhotoPopup.close();
  })
  .finally(() => addPhotoPopup.renderLoading(false));
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

const avatar = document.querySelector(profileAvatarSelector);
avatar.addEventListener('click', () => {changeAvatarPopup.open()})
function changeAvatar(data) {
  changeAvatarPopup.renderLoading(true)
  api.changeAvatar(data.avatar).then((res) => {
    console.log(res)
    userInfo.changeAvatar(data.avatar)
    changeAvatarPopup.close()
  }).finally(() => changeAvatarPopup.renderLoading(false));
}

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
  userAvatarSelector: profileAvatarSelector,
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

const changeAvatarPopup = new PopupWithForm(
  popupChangeAvatarSelector,
  changeAvatar
);

deleteAcceptPopup.setEventListeners();
changeAvatarPopup.setEventListeners();
photoPopup.setEventListeners();
redactorProfilePopup.setEventListeners();
addPhotoPopup.setEventListeners();

cardList.renderItems();

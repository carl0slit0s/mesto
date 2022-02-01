const profileEditButton = document.querySelector(".profile__edit");
const addPhotoButton = document.querySelector(".profile__add-button");
const popupRedactorProfile = document.querySelector(
  ".popup_target_redactor-profile"
);
const popupAddPhoto = document.querySelector(".popup_target_add-photo");
const popupOpenPhoto = document.querySelector(".popup_terget_add-photo");

const inputProfileName = document.querySelector(".form__input_field_name");
const inputProfileAbout = document.querySelector(".form__input_field_about");

const redactorProfileForm = popupRedactorProfile.querySelector(".form");
const addPhotoForm = popupAddPhoto.querySelector(".form");

const inputCardName = addPhotoForm.querySelector(".form__input_card_name");
const inputCardLink = addPhotoForm.querySelector(".form__input_card_link");

const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

const gallery = document.querySelector(".gallery");
const template = document.querySelector("#template").content;

const deleteButtons = document.querySelectorAll(".photo-card__delete");

const popupPhoto = document.querySelector(".photo-popup__photo");
const popupPhotoTitle = document.querySelector(".photo-popup__title");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function render() {
  initialCards.forEach((card) => renderCard(card));
}

function renderCard(card) {
  const linkCard = card.link;
  const nameCard = card.name;
  createCloneTemplate(nameCard, linkCard);
}

// открыть попап, найти кнопку закрытия
function openPopup(popup) {
  popup.classList.add("popup_opened");
  const profileEditClosedButton = popup.querySelector(".popup__close-icon");
  profileEditClosedButton.addEventListener("click", () => closedPopup(popup));
}

function createCloneTemplate(cardName, cardLink) {
  const newCard = template.cloneNode(true);
  const newCardImg = newCard.querySelector(".photo-card__photo");
  const newCardName = newCard.querySelector(".photo-card__name");
  newCardName.textContent = cardName;
  newCardImg.alt = cardName;
  newCardImg.src = cardLink;
  const photoCard = document.querySelector(".photo-card");
  addListener(newCard);
  gallery.insertBefore(newCard, photoCard);
}

function addPhoto(event) {
  event.preventDefault();
  if (inputCardName.value && inputCardLink.value) {
    const cardName = inputCardName.value;
    const cardLink = inputCardLink.value;
    createCloneTemplate(cardName, cardLink);
  }
  closedPopup(popupAddPhoto);
}

// открыть редактор добавления фото
function openPopapAddPhoto(event) {
  event.preventDefault();
  openPopup(popupAddPhoto);
}

// открыть редактор профиля
function openRedactorProfile(event) {
  event.preventDefault();

  openPopup(popupRedactorProfile);

  inputProfileName.value = profileName.textContent;
  inputProfileAbout.value = profileAbout.textContent;
}

// Закрыть popup
function closedPopup(popup) {
  popup.classList.remove("popup_opened");
}

// сохранить изменения в редакторе профиля
function saveRedactorProfile(event) {
  event.preventDefault();
  closedPopup(popupRedactorProfile);
  profileName.textContent = inputProfileName.value;
  profileAbout.textContent = inputProfileAbout.value;
}

function addListener(newCard) {
  newCard
    .querySelector(".photo-card__delete")
    .addEventListener("click", cardDeleted);
  newCard
    .querySelector(".photo-card__like")
    .addEventListener("click", cardLiked);
  newCard
    .querySelector(".photo-card__photo")
    .addEventListener("click", openPhoto);
}

function openPhoto(event) {
  const photoCard = event.target;
  const photoTitle = event.target
    .closest(".photo-card")
    .querySelector(".photo-card__name");
  popupPhoto.src = photoCard.src;
  popupPhotoTitle.textContent = photoTitle.textContent;
  openPopup(popupOpenPhoto);
}

function cardDeleted(event) {
  event.target.closest(".photo-card").remove();
}

function cardLiked(event) {
  const like = event.target;
  if (!like.classList.contains("photo-card__like_activate")) {
    like.classList.add("photo-card__like_activate");
  } else {
    like.classList.remove("photo-card__like_activate");
  }
}

addPhotoButton.addEventListener("click", openPopapAddPhoto);
profileEditButton.addEventListener("click", openRedactorProfile);
redactorProfileForm.addEventListener("submit", saveRedactorProfile);
addPhotoForm.addEventListener("submit", addPhoto);

render();

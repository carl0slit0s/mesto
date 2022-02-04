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

const profileEditClosedButton = document.querySelectorAll(".popup__close-icon");

function render() {
  initialCards.forEach((card) => {
    const newCard = createCloneTemplate(card.name, card.link);
    inseretCard(gallery, newCard);
  });
}

// открыть попап, найти кнопку закрытия
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function findOpenPopup(event) {
  const openPopup = document.querySelector(".popup_opened");
  closePopup(openPopup);
}

// клонирование темплейта
function createCloneTemplate(cardName, cardLink) {
  const newCard = template.cloneNode(true);
  const newCardImg = newCard.querySelector(".photo-card__photo");
  const newCardName = newCard.querySelector(".photo-card__name");
  newCardName.textContent = cardName;
  newCardImg.alt = cardName;
  newCardImg.src = cardLink;
  addListener(newCard);
  return newCard;
}

// добавление карты в разметку
function inseretCard(container, newCard) {
  container.prepend(newCard);
}

function addPhoto(event) {
  event.preventDefault();
  if (inputCardName.value && inputCardLink.value) {
    const cardName = inputCardName.value;
    const cardLink = inputCardLink.value;
    inputCardName.value = "";
    inputCardLink.value = "";
    const newCard = createCloneTemplate(cardName, cardLink);
    inseretCard(gallery, newCard);
  }
  closePopup(popupAddPhoto);
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
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

// сохранить изменения в редакторе профиля
function saveRedactorProfile(event) {
  event.preventDefault();
  closePopup(popupRedactorProfile);
  profileName.textContent = inputProfileName.value;
  profileAbout.textContent = inputProfileAbout.value;
  inputProfileName.value = "";
  inputProfileAbout.value = "";
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
  popupPhoto.alt = photoTitle.textContent;
  popupPhotoTitle.textContent = photoTitle.textContent;
  openPopup(popupOpenPhoto);
}

function cardDeleted(event) {
  event.target.closest(".photo-card").remove();
}

function cardLiked(event) {
  const like = event.target;
  like.classList.toggle("photo-card__like_activate");
}

addPhotoButton.addEventListener("click", openPopapAddPhoto);
profileEditButton.addEventListener("click", openRedactorProfile);
redactorProfileForm.addEventListener("submit", saveRedactorProfile);
addPhotoForm.addEventListener("submit", addPhoto);
profileEditClosedButton.forEach((button) =>
  button.addEventListener("click", findOpenPopup)
);

render();

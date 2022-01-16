let profileEditButton = document.querySelector(".profile__edit");
let redactorProfile = document.querySelector(".popup");
// let redactorProfileSaveButton = document.querySelector(".edit-form__save");
let profileEditClosedButton = document.querySelector(".edit-form__close-icon");

let editProfileName = document.querySelector(".edit-form__name");
let editProfileAbout = document.querySelector(".edit-form__about");

let card_likes = document.querySelectorAll(".photo-card__like");

let redactorProfileForm = document.querySelector(".edit-form");

// закрыть popup
function openRedactorProfile(event) {
  event.preventDefault();

  let profileName = document.querySelector(".profile__name").textContent;
  let profileAbout = document.querySelector(".profile__about").textContent;

  redactorProfile.classList.add("popup_opened");
  editProfileName.value = profileName;
  editProfileAbout.value = profileAbout;

  profileEditClosedButton.addEventListener("click", closedRedactorProfile);
  redactorProfileForm.addEventListener("submit", saveRedactorProfile);
}

// Закрыть popup
function closedRedactorProfile(event) {
  event.preventDefault();
  redactorProfile.classList.remove("popup_opened");
}

// сохранить изменения
function saveRedactorProfile(event) {
  event.preventDefault();
  redactorProfile.classList.remove("popup_opened");

  let inputName = document.querySelector(".edit-form__name").value;
  let inputAbout = document.querySelector(".edit-form__about").value;

  document.querySelector(".profile__name").textContent = inputName;
  document.querySelector(".profile__about").textContent = inputAbout;
}

profileEditButton.addEventListener("click", openRedactorProfile);

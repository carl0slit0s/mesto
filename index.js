const profileEditButton = document.querySelector(".profile__edit");
const redactorProfile = document.querySelector(".popup");
// let redactorProfileSaveButton = document.querySelector(".edit-form__save");
const profileEditClosedButton = document.querySelector(".edit-form__close-icon");

const editProfileName = document.querySelector(".edit-form__name");
const editProfileAbout = document.querySelector(".edit-form__about");

const card_likes = document.querySelectorAll(".photo-card__like");

const redactorProfileForm = document.querySelector(".edit-form");

// закрыть popup
function openRedactorProfile(event) {
  event.preventDefault();

  const profileName = document.querySelector(".profile__name").textContent;
  const profileAbout = document.querySelector(".profile__about").textContent;

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

  const inputName = document.querySelector(".edit-form__name").value;
  const inputAbout = document.querySelector(".edit-form__about").value;

  document.querySelector(".profile__name").textContent = inputName;
  document.querySelector(".profile__about").textContent = inputAbout;
}

profileEditButton.addEventListener("click", openRedactorProfile);

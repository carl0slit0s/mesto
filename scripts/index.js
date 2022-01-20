const profileEditButton = document.querySelector(".profile__edit");
const popup = document.querySelector(".popup");
const profileEditClosedButton = document.querySelector(
  ".popup__close-icon"
);

const inputProfileName = document.querySelector(".form__input_field_name");
const inputProfileAbout = document.querySelector(".form__input_field_about");

const redactorProfileForm = document.querySelector(".form");

const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

// открыть popup
function openRedactorProfile(event) {
  event.preventDefault();

  popup.classList.add("popup_opened");

  inputProfileName.value = profileName.textContent;
  inputProfileAbout.value = profileAbout.textContent;
}

// Закрыть popup
function closedRedactorProfile(event) {
  popup.classList.remove("popup_opened");
}

// сохранить изменения
function saveRedactorProfile(event) {
  event.preventDefault();
  closedRedactorProfile();
  profileName.textContent = inputProfileName.value;
  profileAbout.textContent = inputProfileAbout.value;
}

profileEditButton.addEventListener("click", openRedactorProfile);
profileEditClosedButton.addEventListener("click", closedRedactorProfile);
redactorProfileForm.addEventListener("submit", saveRedactorProfile);

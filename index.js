const profileEditButton = document.querySelector(".profile__edit");
const redactorProfile = document.querySelector(".popup");
const profileEditClosedButton = document.querySelector(
  ".edit-form__close-icon"
);

const inputProfileName = document.querySelector(".edit-form__name");
const inputProfileAbout = document.querySelector(".edit-form__about");

const redactorProfileForm = document.querySelector(".edit-form");

const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

// открыть popup
function openRedactorProfile(event) {
  event.preventDefault();

  redactorProfile.classList.add("popup_opened");

  inputProfileName.value = profileName.textContent;
  inputProfileAbout.value = profileAbout.textContent;
}

// Закрыть popup
function closedRedactorProfile(event) {
  redactorProfile.classList.remove("popup_opened");
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

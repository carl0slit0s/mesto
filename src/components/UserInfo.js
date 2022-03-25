export class UserInfo {
  constructor({ userNameSelector, userAboutSelector }) {
    this._name = document.querySelector(userNameSelector);
    this._about = document.querySelector(userAboutSelector);
  }

  getUserInfo() {
    return { name: this._name.textContent, about: this._about.textContent };
  }

  setUserInfo(newName, newAbout) {
    this._name.textContent = newName;
    this._about.textContent = newAbout;
  }
}

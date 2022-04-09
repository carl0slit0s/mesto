export class UserInfo {
  constructor({ userNameSelector, userAboutSelector, userAvatarSelector }) {
    this._name = document.querySelector(userNameSelector);
    this._about = document.querySelector(userAboutSelector);
    this._avatar = document.querySelector(userAvatarSelector)
  }

  getUserInfo() {
    return { name: this._name.textContent, about: this._about.textContent };
  }

  setUserInfo(newName, newAbout, newAvatar) {
    this._name.textContent = newName;
    this._about.textContent = newAbout;
    this._avatar.src = newAvatar
  }

  updateUserInfo(newName, newAbout,) {    
    this._name.textContent = newName;
    this._about.textContent = newAbout;
  }

  changeAvatar(newAvatar) {
    this._avatar.src = newAvatar
  }
}

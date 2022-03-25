import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(selectorPopup, selectorPopupTitle) {
    super(selectorPopup);
    this._popupPhotoTitle = this._popup.querySelector(selectorPopupTitle);
  }

  open(title, link) {
    const photoImg = this._popup.querySelector('.photo-popup__photo');
    photoImg.src = link;
    this._popup.alt = title;
    this._popupPhotoTitle.textContent = title;
    super.open();
  }
}

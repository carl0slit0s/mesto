import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(selectorPopup, selectorPopupTitle) {
    super(selectorPopup);
    this._popupPhotoTitle = this._popup.querySelector(selectorPopupTitle);
    this._photoImg = this._popup.querySelector('.photo-popup__photo');
  }

  open(title, link) {
    this._photoImg.src = link;
    this._photoImg.alt = title;
    this._popupPhotoTitle.textContent = title;
    super.open();
  }
}

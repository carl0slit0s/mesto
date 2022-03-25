  export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items
    this._renderer = renderer

    this._conteiner = containerSelector
  }

  renderItems() {
    this._items.forEach(element => {
      this._renderer(element)
    });
  }

  addItem(element) {
    this._conteiner.prepend(element)
  }

}
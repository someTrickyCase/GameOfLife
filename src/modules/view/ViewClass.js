export default class View {
  _clear() {
    this._parentContainer.innerHTML = "";
  }

  createElement(quantityOfElements = 1) {
    this._clear();

    while (quantityOfElements !== 0) {
      const element = document.createElement("div");
      element.className = this._className;

      this._parentContainer.appendChild(element);
      quantityOfElements -= 1;
    }
  }
}

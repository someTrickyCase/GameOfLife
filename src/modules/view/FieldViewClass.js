import View from "./ViewClass";

class MainFieldView extends View {
  _parentContainer = document.body;
  _className = "main-field";

  setUpGridOnField(quantityOfColumns) {
    document.querySelector(
      ".main-field"
    ).style.gridTemplateColumns = `repeat(${quantityOfColumns}, 1fr)`;
    document.querySelector(
      ".main-field"
    ).style.gridTemplateRows = `repeat(${quantityOfColumns}, 1fr)`;
  }
}

export default new MainFieldView();

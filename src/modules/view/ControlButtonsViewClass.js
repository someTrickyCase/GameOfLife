class ControlButtonsView {
  _parentContainer = document.body;

  _generateMarkup() {
    return `
    <div class="control-buttons-container">
      <button class="button--start button">START</button>
      <button class="button--cycle button">CYCLE</button>
    </div>`;
  }

  renderMarkup() {
    const markup = this._generateMarkup();
    this._parentContainer.insertAdjacentHTML("beforeend", markup);
  }

  addHendlerClickStart(hendler) {
    this._parentContainer.addEventListener("click", (event) => {
      const button = event.target.closest(".button--start");
      if (!button) return;
      hendler();
    });
  }

  addHendlerClickCycle(hendler) {
    this._parentContainer.addEventListener("click", (event) => {
      const button = event.target.closest(".button--cycle");
      if (!button) return;
      button.classList.toggle("pressed");
      hendler(button.classList.contains("pressed") ? true : false);
    });
  }
}

export default new ControlButtonsView();

class OptionsButtonView {
  _parentContainer = document.body;

  _generateOpenButtonMarkup() {
    return `
    <button class="button button--open-popup">
      <h2>options</h2>
    </button>
    `;
  }

  _generatePopupMarkup() {
    return `
    <div class="hide options-popup">
      <button class="button button--close-popup">close</button>
      <label for="value" class="slider-label">Set field size:</label>
      <output class="rangevalue" id="rangevalue">20</output>
      <div class="slidebar">
        <input
          type="range"
          min="10"
          max="50"
          value="20"
          name="value"
          id="value"
          oninput="rangevalue.value=value"
          class="slider"
        />
      </div>
      <button class="button button--apply">Apply</button>
    </div>
    `;
  }

  renderMarkup() {
    const markupButton = this._generateOpenButtonMarkup();
    const markupPopup = this._generatePopupMarkup();
    [markupButton, markupPopup].forEach((markup) => {
      this._parentContainer.insertAdjacentHTML("afterbegin", markup);
    });
  }

  switchVisability() {
    const button = document.querySelector(".button--open-popup");
    const popup = document.querySelector(".options-popup");
    [button, popup].forEach((element) => {
      element.classList.toggle("hide");
    });
  }

  getQuantityOfColumns() {
    return Number(document.querySelector(".rangevalue").value);
  }

  addHendlerClickToOpen(hendler) {
    this._parentContainer.addEventListener("click", (event) => {
      const button = event.target.closest(".button--open-popup");
      if (!button) return;
      hendler();
    });
  }

  addHedlerClickToApply(hendler) {
    const popup = document.querySelector(".options-popup");
    popup.addEventListener("click", (event) => {
      const button = event.target.closest(".button--apply");
      if (!button) return;
      hendler();
    });
  }

  addHendlerClickToClose(hendler) {
    const popup = document.querySelector(".options-popup");
    popup.addEventListener("click", (event) => {
      const button = event.target.closest(".button--close-popup");
      if (!button) return;
      hendler();
    });
  }
}

export default new OptionsButtonView();

class TitleView {
  _parentContainer = document.body;

  _generateMarkup() {
    return `
      <h1 class="title">Game of <span class="hightlight">L</span>ife</h1>
    `;
  }

  renderMarkup() {
    const markup = this._generateMarkup();
    this._parentContainer.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new TitleView();

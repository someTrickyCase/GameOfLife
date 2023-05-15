import View from "./ViewClass";

class FieldCellView extends View {
  _parentContainer = document.querySelector(".main-field");
  _className = "fields-cell";

  // Just for correspondence to DRY
  handlerCaller(event, hendler) {
    const allCells = [...this._parentContainer.children];
    const indexOfTargetCell = [...this._parentContainer.children].indexOf(
      event.target
    );
    this.changeColor(event.target);
    hendler(indexOfTargetCell, allCells);
  }

  addHendlerClick(hendler) {
    let mouseIsDown = false;
    // prettier-ignore
    this._parentContainer.addEventListener("mousedown",() => (mouseIsDown = true));
    // prettier-ignore
    this._parentContainer.addEventListener("mouseup",() => (mouseIsDown = false));

    this._parentContainer.addEventListener("mouseover", (event) => {
      // prettier-ignore
      if (!mouseIsDown || !event.target.classList.contains("fields-cell")) return;
      this.handlerCaller(event, hendler);
    });

    this._parentContainer.addEventListener("click", (event) => {
      if (!event.target.classList.contains("fields-cell")) return;
      this.handlerCaller(event, hendler);
    });
  }

  changeColor(element) {
    if (!element.classList.contains("fields-cell")) return;
    element.classList.toggle("pressed-cells");
  }

  updateCells(indexesOfAlives) {
    for (const [index, cell] of this._parentContainer.childNodes.entries()) {
      if (indexesOfAlives.includes(index)) cell.classList.add("pressed-cells");
      else cell.classList.remove("pressed-cells");
    }
  }
}

export default new FieldCellView();

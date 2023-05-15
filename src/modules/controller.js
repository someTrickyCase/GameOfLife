import "../../src/styles/style.css";
import TitleViewClass from "./view/TitleViewClass";
import MainFieldView from "./view/FieldViewClass.js";
import FieldCellView from "./view/FieldsCellViewClass.js";
import ControlButtonsView from "./view/ControlButtonsViewClass.js";
import OptionsButtonsView from "./view/OptionsButtonsViewClass";
import * as model from "./model.js";
import { COLUMNS_IN_FIELD, INTERVAL_DELAY } from "./config";

function renderMainField() {
  MainFieldView.createElement();
  MainFieldView.setUpGridOnField(COLUMNS_IN_FIELD);
}

function renderCellsInField() {
  FieldCellView._parentContainer = document.querySelector(".main-field");
  FieldCellView.createElement(Math.pow(COLUMNS_IN_FIELD, 2));
}

function getAllIndexes() {
  for (let i = 0; i < Math.pow(model.state.columnsInField, 2); i++) {
    model.state.indexesOfAllCells.push(i);
  }
}

function controlStartButton() {
  model.updateState(model.findNewAlives());
  FieldCellView.updateCells(model.state.indexOfAlivesCells);
}

let interval;
function startCycle() {
  interval = setInterval(controlStartButton, INTERVAL_DELAY);
}

function controlCycleButton(notLaunched) {
  if (notLaunched) startCycle();
  if (!notLaunched) clearInterval(interval);
}

function controlCellInField(indexOfCell) {
  const indexOfAlivesCells = model.state.indexOfAlivesCells;
  if (indexOfAlivesCells.includes(indexOfCell)) {
    indexOfAlivesCells.splice(indexOfAlivesCells.indexOf(indexOfCell), 1);
  } else {
    indexOfAlivesCells.push(indexOfCell);
  }
}

function controlOptionsButton() {
  OptionsButtonsView.switchVisability();
}

function controlApplySettingsButton() {
  const quantityOfColumns = OptionsButtonsView.getQuantityOfColumns();
  FieldCellView._parentContainer = document.querySelector(".main-field");
  FieldCellView.createElement(Math.pow(quantityOfColumns, 2));
  MainFieldView.setUpGridOnField(quantityOfColumns);
  OptionsButtonsView.switchVisability();
  model.resetState(quantityOfColumns);
  getAllIndexes();
}

function renderViews() {
  renderMainField();
  renderCellsInField();
  ControlButtonsView.renderMarkup();
  OptionsButtonsView.renderMarkup();
  TitleViewClass.renderMarkup();
}

function run() {
  renderViews();
  getAllIndexes();
  ControlButtonsView.addHendlerClickStart(controlStartButton);
  ControlButtonsView.addHendlerClickCycle(controlCycleButton);
  FieldCellView.addHendlerClick(controlCellInField);
  OptionsButtonsView.addHendlerClickToOpen(controlOptionsButton);
  OptionsButtonsView.addHendlerClickToClose(controlOptionsButton);
  OptionsButtonsView.addHedlerClickToApply(controlApplySettingsButton);
}

run();

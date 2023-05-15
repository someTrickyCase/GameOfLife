import { COLUMNS_IN_FIELD } from "./config";

const state = {
  columnsInField: COLUMNS_IN_FIELD,
  indexOfNewAliveCells: [],
  indexOfAlivesCells: [],
  indexesOfAllCells: [],
};

const findNewAlives = function () {
  state.indexesOfAllCells.forEach((index) => {
    let neighboursOfCell = [];
    if (index % state.columnsInField === 0) {
      neighboursOfCell.push(
        index - state.columnsInField,
        index - state.columnsInField + 1,
        index + 1,
        index + state.columnsInField,
        index + state.columnsInField + 1
      );
    } else if ((index + 1) % state.columnsInField === 0) {
      neighboursOfCell.push(
        index - state.columnsInField - 1,
        index - state.columnsInField,
        index - 1,
        index + state.columnsInField - 1,
        index + state.columnsInField
      );
    } else {
      neighboursOfCell.push(
        index - state.columnsInField - 1,
        index - state.columnsInField,
        index - state.columnsInField + 1,
        index - 1,
        index + 1,
        index + state.columnsInField - 1,
        index + state.columnsInField,
        index + state.columnsInField + 1
      );
    }

    neighboursOfCell = neighboursOfCell.filter((value) => value >= 0);

    let coincedences = 0;

    for (const neigbour of neighboursOfCell) {
      for (const aliveOne of state.indexOfAlivesCells) {
        if (neigbour === aliveOne) coincedences++;
      }
    }

    if (coincedences === 3) state.indexOfNewAliveCells.push(index);
    else if (state.indexOfAlivesCells.includes(index) && coincedences === 2)
      state.indexOfNewAliveCells.push(index);
  });
  return state.indexOfNewAliveCells;
};

const updateState = function (newAlives) {
  state.indexOfAlivesCells = newAlives;
  state.indexOfAlivesCells = [...new Set(state.indexOfAlivesCells)];
  state.indexOfNewAliveCells = [];
};

const resetState = function (quantityOfColumns) {
  state.columnsInField = quantityOfColumns;
  state.indexOfAlivesCells = [];
  state.indexOfNewAliveCells = [];
  state.indexesOfAllCells = [];
};

export { state, findNewAlives, updateState, resetState };

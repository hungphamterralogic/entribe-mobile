import { handleActions } from "redux-actions";

const defaultState = {
  firstNumber: 0,
  secondNumber: 0,
};

export default handleActions(
  {
    INCREASE_FIRST_NUMBER_BY_ONE: state => ({
      ...state,
      firstNumber: state.firstNumber + 1,
    }),
    INCREASE_SECOND_NUMBER_BY_TWO: state => ({
      ...state,
      secondNumber: state.secondNumber + 2,
    }),
  },
  defaultState,
);

import { connect } from "react-redux";
import NumberOnState from "./NumberOnState";

const NumberOnStateContainer = connect(state => ({
  firstNumber: state.number.firstNumber,
  secondNumber: state.number.secondNumber,
}))(NumberOnState);

export default NumberOnStateContainer;

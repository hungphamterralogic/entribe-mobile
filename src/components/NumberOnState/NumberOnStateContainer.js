import { connect } from "react-redux";
import NumberOnState from "./NumberOnState";

const NumberOnStateContainer = connect(state => ({
  number: state.number
}))(NumberOnState);

export default NumberOnStateContainer;

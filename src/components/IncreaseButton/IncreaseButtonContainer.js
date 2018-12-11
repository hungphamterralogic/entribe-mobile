import { connect } from "react-redux";
import { increaseAction } from "@actions/numberActions";
import IncreaseButton from "./IncreaseButton";

const IncreaseButtonContainer = connect(
  null,
  dispatch => ({
    increase: () => dispatch(increaseAction()),
  }),
)(IncreaseButton);

export default IncreaseButtonContainer;

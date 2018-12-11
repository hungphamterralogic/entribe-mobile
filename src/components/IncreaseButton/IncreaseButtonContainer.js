import { connect } from "react-redux";
import IncreaseButton from "./IncreaseButton";
import { increaseAction } from "../../actions/numberActions";

const IncreaseButtonContainer = connect(
  null,
  dispatch => ({
    increase: () => dispatch(increaseAction())
  })
)(IncreaseButton);

export default IncreaseButtonContainer;

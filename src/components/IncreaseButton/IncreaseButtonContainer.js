import { connect } from "react-redux";
import { increaseFirstNumByOne } from "@actions/numberActions";
import IncreaseButton from "./IncreaseButton";

const IncreaseButtonContainer = connect(
  null,
  dispatch => ({
    increaseFirstNumByOne: () => dispatch(increaseFirstNumByOne()),
  }),
)(IncreaseButton);

export default IncreaseButtonContainer;

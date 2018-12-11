import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-native";

const increaseButton = ({ increase }) => (
  <Button
    title="+"
    onPress={() => {
      increase();
    }}
  />
);

increaseButton.propTypes = {
  increase: PropTypes.func.isRequired,
};

export default increaseButton;

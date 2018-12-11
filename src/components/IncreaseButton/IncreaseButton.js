import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-native";

const increaseButton = ({ increaseFirstNumByOne }) => (
  <Button
    title="+"
    onPress={() => {
      increaseFirstNumByOne();
    }}
  />
);

increaseButton.propTypes = {
  increaseFirstNumByOne: PropTypes.func.isRequired,
};

export default increaseButton;

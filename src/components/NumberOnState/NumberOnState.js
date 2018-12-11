import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";

const numberOnState = ({ number }) => (
  <Text>
    Number managed by state:
    {number}
  </Text>
);

numberOnState.propTypes = {
  number: PropTypes.number.isRequired,
};

export default numberOnState;

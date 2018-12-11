import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

const numberOnState = ({ firstNumber, secondNumber }) => (
  <View>
    <Text>
      First Number managed by state:
      {firstNumber}
    </Text>
    <Text>
      Second Number managed by state:
      {secondNumber}
    </Text>
  </View>
);

numberOnState.propTypes = {
  firstNumber: PropTypes.number.isRequired,
  secondNumber: PropTypes.number.isRequired,
};

export default numberOnState;

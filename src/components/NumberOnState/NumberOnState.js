import React from "react";
import { Text } from "react-native";

const NumberOnState = ({ number }) => (
  <Text>
    Number managed by state:
    {number}
  </Text>
);

export default NumberOnState;

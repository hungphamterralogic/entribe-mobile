import React from "react";
import { Button } from "react-native";

const increaseButton = props => (
  <Button
    title="+"
    onPress={() => {
      props.increase();
    }}
  />
);

export default increaseButton;

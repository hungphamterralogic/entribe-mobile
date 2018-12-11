import React from "react";
import { Button } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

const NavigateButton = ({ title, routeName, navigation: { dispatch } }) => (
  <Button
    title={title}
    onPress={() => {
      dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName })],
        }),
      );
    }}
  />
);

export default NavigateButton;

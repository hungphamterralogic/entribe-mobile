import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

const navigateButton = ({ title, routeName, navigation: { dispatch } }) => (
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

navigateButton.propTypes = {
  title: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

export default navigateButton;

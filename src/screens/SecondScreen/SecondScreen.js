import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import NavigateButton from "@components/NavigateButton";
import IncreaseButton from "@components/IncreaseButton";
import NumberOnState from "@components/NumberOnState";

const secondScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <NumberOnState />
    <Text>Second Screen</Text>
    <NavigateButton title="Go to Login screen" routeName="Login" navigation={navigation} />
    <IncreaseButton />
  </View>
);

secondScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
};

export default secondScreen;

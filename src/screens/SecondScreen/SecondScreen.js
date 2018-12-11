import React from "react";
import { View, Text } from "react-native";
import NavigateButton from "../../components/NavigateButton";
import IncreaseButton from "../../components/IncreaseButton";
import NumberOnState from "../../components/NumberOnState";

const SecondScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <NumberOnState />
    <Text>Second Screen</Text>
    <NavigateButton title="Go to Login screen" routeName="Login" navigation={navigation} />
    <IncreaseButton />
  </View>
);

export default SecondScreen;

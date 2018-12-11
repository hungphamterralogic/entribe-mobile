import React from "react";
import { View, Text } from "react-native";
import NavigateButton from "../../components/NavigateButton";
import IncreaseButton from "../../components/IncreaseButton";
import NumberOnState from "../../components/NumberOnState";

const Login = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <NumberOnState />
    <Text>Login Screen</Text>
    <NavigateButton title="Go to Second Screen" routeName="SecondScreen" navigation={navigation} />
    <IncreaseButton />
  </View>
);

export default Login;

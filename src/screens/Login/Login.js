import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";
import broccoliImg from "@images/broccoli.jpg";
import NavigateButton from "@components/NavigateButton";
import IncreaseButton from "@components/IncreaseButton";
import NumberOnState from "@components/NumberOnState";

const login = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Image source={broccoliImg} />
    <NumberOnState />
    <Text>Login Screen</Text>
    <NavigateButton title="Go to Second Screen" routeName="SecondScreen" navigation={navigation} />
    <IncreaseButton />
  </View>
);

login.propTypes = {
  navigation: PropTypes.func.isRequired,
};

export default login;

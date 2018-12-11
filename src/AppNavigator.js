import { createAppContainer, createStackNavigator } from "react-navigation";
import Login from "./screens/Login";
import SecondScreen from "./screens/SecondScreen";

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    SecondScreen: { screen: SecondScreen },
  },
  { initialRouteName: "Login" },
);

export default createAppContainer(AppNavigator);

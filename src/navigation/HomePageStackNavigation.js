import React from "react";

import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Forgot from "../screens/Forgot";
import HomeSc from "../screens/Home";
import Map from "../screens/Map";

import { createStackNavigator } from "@react-navigation/stack";
import DashBoardNav from "./DashBoardNav";
import DrawerTab from "./DrawerTab";
import AuthNav from "./AuthNav";

const Stack = createStackNavigator();

function HomePageStackNavigation() {
  return (
    //  <Stack.Screen name="Splash" component={plash} />
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={AuthNav} />
      <Stack.Screen name="Home" component={DrawerTab} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Forgot" component={Forgot} />
    </Stack.Navigator>
  );
}

export default () => {
  return <HomePageStackNavigation />;
};

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DashBoard from "../screens/DashBoard";
import Bus from "../screens/Bus";

const DashBoardNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={DashBoard}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Bus"
        component={Bus}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default DashBoardNav;

const styles = StyleSheet.create({});

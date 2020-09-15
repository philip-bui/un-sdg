import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import TheGoalsScreen from "./TheGoalsScreen";

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "rgb(52, 122, 215)",
  },
  headerTitleStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: styles.headerStyle,
      headerTintColor: "white",
      headerTitleStyle: styles.headerTitleStyle,
    }}
  >
    <Stack.Screen name="The Goals" component={TheGoalsScreen} />
  </Stack.Navigator>
);

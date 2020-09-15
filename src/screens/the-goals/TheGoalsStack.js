import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";

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
      headerBackTitleVisible: false,
      headerStyle: styles.headerStyle,
      headerTintColor: "white",
      headerTitleStyle: styles.headerTitleStyle,
    }}
  >
    <Stack.Screen name="The Goals" component={HomeScreen} />
    <Stack.Screen
      name="Detail"
      options={({
        route: {
          params: { title, backgroundColor },
        },
      }) => ({ title, headerStyle: { backgroundColor } })}
      component={DetailScreen}
    />
  </Stack.Navigator>
);

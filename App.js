import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabController from "./src/screens/TabController";

export default () => (
  <NavigationContainer
    theme={{
      colors: {
        primary: "rgb(255, 45, 85)",
        background: "white",
        card: "rgb(255, 255, 255)",
        text: "rgb(28, 28, 30)",
        border: "rgb(199, 199, 204)",
        notification: "rgb(255, 69, 58)",
      },
    }}
  >
    <StatusBar barStyle="light-content" />
    <TabController />
  </NavigationContainer>
);

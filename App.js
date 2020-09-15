import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabController from "./src/screens/TabController";

export default () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" />
    <TabController />
  </NavigationContainer>
);

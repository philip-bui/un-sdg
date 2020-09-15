import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
  </NavigationContainer>
);

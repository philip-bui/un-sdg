import "react-native-gesture-handler";
import React from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <Tab.Navigator initialRouteName="The Goals">
      <Tab.Screen name="News" component={View} />
      <Tab.Screen name="The Goals" component={View} />
      <Tab.Screen name="Actions" component={View} />
      <Tab.Screen name="Partners" component={View} />
      <Tab.Screen name="Profile" component={View} />
    </Tab.Navigator>
  </NavigationContainer>
);

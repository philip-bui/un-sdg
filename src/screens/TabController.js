import React from "react";
import { Platform, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

import NewsStack from "./news/NewsStack";
import TheGoalsStack from "./the-goals/TheGoalsStack";
import ActionsStack from "./actions/ActionsStack";
import PartnersStack from "./partners/PartnersStack";

import ProfileStack from "./profile/ProfileStack";

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: 0,
    backgroundColor: "rgb(52, 122, 215)",
  },
});

const Tab = createBottomTabNavigator();

const getTabIcon = ({ focused, color, size }, name) => {
  const prefix = Platform.OS === "ios" ? "ios-" : "md-";
  const suffix = !focused ? "-outline" : "";
  const iconName = `${prefix}${name}${suffix}`;

  return <Ionicons name={iconName} color={color} size={size} />;
};

export default () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: "white",
      inactiveTintColor: "lightgray",
      style: styles.tabBarStyle,
    }}
  >
    <Tab.Screen
      name="News"
      component={NewsStack}
      options={{
        tabBarIcon: (options) => getTabIcon(options, "newspaper"),
      }}
    />
    <Tab.Screen
      name="The Goals"
      component={TheGoalsStack}
      options={{
        tabBarTestID: "the-goals-tab",
        tabBarIcon: (options) => getTabIcon(options, "ribbon"),
      }}
    />
    <Tab.Screen
      name="Actions"
      component={ActionsStack}
      options={{
        tabBarIcon: (options) => getTabIcon(options, "flash"),
      }}
    />
    <Tab.Screen
      name="Partners"
      component={PartnersStack}
      options={{
        tabBarIcon: (options) => getTabIcon(options, "link"),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStack}
      options={{
        tabBarIcon: (options) => getTabIcon(options, "person"),
      }}
    />
  </Tab.Navigator>
);

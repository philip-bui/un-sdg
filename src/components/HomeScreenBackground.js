import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

import GoalsBackground from "../../assets/goals_bk.png";
import GoalsBackgroundMask from "../../assets/bk_mask.png";

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: 350,
  },
  childrenView: {
    flex: 1,
    justifyContent: "center",
  },
  mask: {
    width: "100%",
    height: 100,
  },
});

export default ({ children }) => (
  <ImageBackground
    resizeMode="cover"
    source={GoalsBackground}
    style={styles.background}
  >
    <View style={styles.childrenView}>{children}</View>
    <ImageBackground
      source={GoalsBackgroundMask}
      resizeMode="stretch"
      style={styles.mask}
    />
  </ImageBackground>
);

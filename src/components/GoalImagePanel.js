import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    width: "50%",
    height: 170,
    padding: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ({ source, style, onPress, ...props }) => (
  <View style={StyleSheet.flatten([styles.view, style])}>
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      disabled={onPress == null}
      {...props}
    >
      <Image style={styles.image} resizeMode="contain" source={source} />
    </TouchableOpacity>
  </View>
);

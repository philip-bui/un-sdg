import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    width: "100%",
    flexDirection: "row",
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: "lightgray",
    marginVertical: 4,
    padding: 8,
  },
  image: {
    width: 80,
    height: 80,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 8,
  },
  target: {
    fontFamily: "Gotham-Bold",
    color: "gray",
  },
  code: {
    fontFamily: "Gotham-Bold",
    fontSize: 28,
    color: "black",
    paddingTop: 4,
  },
  title: {
    fontFamily: "Gotham",
    color: "gray",
    paddingTop: 6,
  },
});

export default ({ image, code, title, ...props }) => (
  <View style={styles.view} {...props}>
    <Image source={image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.target}>Target</Text>
      <Text style={styles.code}>{code}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

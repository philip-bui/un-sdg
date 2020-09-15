import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

import HomeScreenBackground from "../../components/HomeScreenBackground";

const styles = StyleSheet.create({
  title: {
    fontFamily: "Giorgio Sans App",
    fontSize: 64,
    textTransform: "uppercase",
    color: "white",
    padding: 16,
  },
});

export default class TheGoalsScreen extends React.PureComponent {
  render() {
    return (
      <ScrollView bounces={false}>
        <HomeScreenBackground>
          <Text style={styles.title}>
            17 Goals to {"\n"}Transform Our {"\n"}World
          </Text>
        </HomeScreenBackground>
      </ScrollView>
    );
  }
}

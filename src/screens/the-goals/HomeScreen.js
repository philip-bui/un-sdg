import React from "react";
import { ScrollView, SafeAreaView, Text, StyleSheet } from "react-native";

import HomeScreenBackground from "../../components/HomeScreenBackground";
import GoalImagePanel from "../../components/GoalImagePanel";

import Goal from "../../models/Goal";

const styles = StyleSheet.create({
  title: {
    fontFamily: "Giorgio Sans App",
    fontSize: 64,
    textTransform: "uppercase",
    color: "white",
    padding: 16,
  },
  goalsContainerView: {
    marginTop: -120,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default class HomeScreen extends React.PureComponent {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView
        style={StyleSheet.absoluteFill}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <HomeScreenBackground>
          <SafeAreaView>
            <Text style={styles.title}>
              17 Goals to {"\n"}Transform Our {"\n"}World
            </Text>
          </SafeAreaView>
        </HomeScreenBackground>
        <SafeAreaView style={styles.goalsContainerView}>
          {Goal.values.map((goal) => (
            <GoalImagePanel
              source={goal.image}
              onPress={() => {
                if (!goal.title) {
                  return;
                }

                navigation.push("Detail", goal);
              }}
            />
          ))}
        </SafeAreaView>
      </ScrollView>
    );
  }
}

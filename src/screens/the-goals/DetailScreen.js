import React from "react";
import { ScrollView, StyleSheet, SafeAreaView } from "react-native";

import { getV1TargetListForGoal } from "../../services/un-sdg-client";

import GoalTargetCard from "../../components/GoalTargetCard";

const styles = StyleSheet.create({
  view: {
    ...StyleSheet.absoluteFill,
    padding: 8,
  },
});
export default class DetailScreen extends React.PureComponent {
  state = {
    targetList: [],
  };

  componentDidMount() {
    getV1TargetListForGoal("13").then((targetList) => {
      this.setState({ targetList });
    });
  }

  render() {
    const {
      route: {
        params: { image },
      },
    } = this.props;
    const { targetList } = this.state;
    return (
      <ScrollView style={styles.view}>
        <SafeAreaView>
          {targetList.map((target) => (
            <GoalTargetCard key={target.code} {...target} image={image} />
          ))}
        </SafeAreaView>
      </ScrollView>
    );
  }
}

import { StyleSheet, View } from "react-native";
import React from "react";

import AbilityTable from "../components/AbilityTable";
import Screen from "../components/ScreenForApp";

function AbilityScreen({ sourceData }) {
  const data = sourceData.data.ability;
  const screenTitle = sourceData.data.screens.ability;
  return (
    <Screen mainTitle={screenTitle}>
      <View style={styles.container}>
        <AbilityTable title={data.skills.title} data={data.skills.data} />
        <View style={styles.margin} />
        <AbilityTable title={data.tools.title} data={data.tools.data} />
        <View style={styles.margin} />
        <AbilityTable title={data.languages.title} data={data.languages.data} />
        <View style={styles.margin} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  margin: { height: 10, width: "100%" },
});

export default AbilityScreen;

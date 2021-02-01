import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AbilityTableRow from "./AbilityTableRow";

function AbilityTable({ title, data }) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      {data.map((rowData, key) => (
        <AbilityTableRow rowData={rowData} key={key} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default AbilityTable;

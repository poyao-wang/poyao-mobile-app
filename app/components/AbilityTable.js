import React from "react";
import { View, StyleSheet } from "react-native";
import AbilityTableRow from "./AbilityTableRow";
import Text from "./Text";

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

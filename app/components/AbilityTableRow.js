import React from "react";
import { View, StyleSheet, Text } from "react-native";

function AbilityTableRow({ rowData }) {
  return (
    <View style={styles.container}>
      <Text>{rowData.name}</Text>
      <Text>{rowData.rate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default AbilityTableRow;

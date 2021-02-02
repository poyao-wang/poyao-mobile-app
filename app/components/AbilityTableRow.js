import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";

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

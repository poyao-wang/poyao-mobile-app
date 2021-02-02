import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";

function ExpTableRow({ rowData }) {
  return (
    <View style={styles.container}>
      <Text>{rowData.inst}</Text>
      <Text>{rowData.subInst}</Text>
      <Text>{rowData.jobTitle}</Text>
      <Text>{rowData.time}</Text>
      <Text>{rowData.cont}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default ExpTableRow;

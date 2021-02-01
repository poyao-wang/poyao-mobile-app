import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ExpTableRow from "./ExpTableRow";

function ExpTable({ title, data }) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <ExpTableRow rowData={data[1]} />
      {data.map((rowData) => (
        <ExpTableRow rowData={rowData} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default ExpTable;

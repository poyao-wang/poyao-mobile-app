import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ExpTableRow from "./ExpTableRow";

function ExpTable({ title, data }) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <ExpTableRow rowData={data[1]} />
      {data.map((rowData, key) => (
        <ExpTableRow rowData={rowData} key={key} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default ExpTable;

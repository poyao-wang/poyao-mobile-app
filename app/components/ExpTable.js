import React from "react";
import { View, StyleSheet } from "react-native";
import ExpTableRow from "./ExpTableRow";
import Text from "./Text";

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

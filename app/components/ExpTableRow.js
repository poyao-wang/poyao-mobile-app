import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import TextH4 from "./TextH4";
import TextH5 from "./TextH5";

function ExpTableRow({ rowData }) {
  return (
    <View style={styles.container}>
      <TextH4>{rowData.inst}</TextH4>
      <Text>{rowData.time}</Text>
      <Text>{rowData.subInst}</Text>
      <View style={styles.jobDetailView}>
        <TextH5>{rowData.jobTitle}</TextH5>
        <Text>{rowData.cont}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    marginBottom: 20,
  },
  jobDetailView: {
    paddingLeft: 10,
  },
});
export default ExpTableRow;

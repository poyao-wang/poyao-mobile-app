import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";

function ProjectTableRow({ rowData }) {
  return (
    <View style={styles.container}>
      <Text>{rowData.cardTitleText}</Text>
      <Text>{rowData.cardText}</Text>
      <Text>{rowData.btnLink}</Text>
      <Text>{rowData.btnText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default ProjectTableRow;

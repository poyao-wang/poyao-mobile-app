import React from "react";
import { View, StyleSheet, Text } from "react-native";

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

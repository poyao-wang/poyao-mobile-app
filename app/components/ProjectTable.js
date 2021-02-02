import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ProjectTableRow from "./ProjectTableRow";

function ProjectTable({ title, data }) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <ProjectTableRow rowData={data[1]} />
      {data.map((rowData, key) => (
        <ProjectTableRow rowData={rowData} key={key} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default ProjectTable;

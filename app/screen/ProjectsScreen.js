import React from "react";
import { View, StyleSheet, Text } from "react-native";

function ProjectsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Projects Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProjectsScreen;

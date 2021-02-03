import { StyleSheet, View } from "react-native";
import React from "react";

import AbilityTable from "../components/AbilityTable";
import Screen from "../components/ScreenForApp";

function AbilityScreen(props) {
  const data = {
    skills: [
      { name: "JavaScript", rate: 4 },
      { name: "ReactJS", rate: 3 },
      { name: "Python", rate: 3 },
      { name: "Bootstrap", rate: 3 },
      { name: "HTML", rate: 3 },
      { name: "CSS", rate: 3 },
      { name: "VBA", rate: 3 },
      { name: "node.js", rate: 3 },
      { name: "Cmd lines", rate: 2 },
      { name: "Google Cloud", rate: 2 },
    ],
    languages: [
      { name: "Chinese", rate: 5 },
      { name: "English", rate: 4 },
      { name: "Japanese", rate: 4 },
      { name: "German", rate: 1 },
    ],
    tools: [
      { name: "MS Office", rate: 5 },
      { name: "Mac", rate: 5 },
      { name: "Windows", rate: 5 },
      { name: "MS VSCode", rate: 3 },
      { name: "Adobe Ai", rate: 3 },
      { name: "Adobe Ps", rate: 3 },
      { name: "Fusion 360", rate: 3 },
      { name: "Google Drive", rate: 3 },
      { name: "Raspberry Pi", rate: 3 },
      { name: "Git / Github", rate: 2 },
    ],
  };

  return (
    <Screen mainTitle="Ability">
      <View style={styles.container}>
        <AbilityTable title="Skills" data={data.skills} />
        <View style={styles.margin} />
        <AbilityTable title="Languages" data={data.languages} />
        <View style={styles.margin} />
        <AbilityTable title="Tools" data={data.tools} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  margin: { height: 10, width: "100%" },
});

export default AbilityScreen;

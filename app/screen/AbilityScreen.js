import { StyleSheet, View } from "react-native";
import React from "react";

import AbilityTable from "../components/AbilityTable";
import Screen from "../components/ScreenForApp";

function AbilityScreen(props) {
  const data = {
    skills: [
      { name: "JavaScript", iconName: "language-javascript", rate: 4 },
      { name: "ReactJS", iconName: "react", rate: 4 },
      { name: "React Native", iconName: "react", rate: 4 },
      { name: "node.js", iconName: "nodejs", rate: 4 },
      { name: "Bootstrap", iconName: "bootstrap", rate: 3 },
      { name: "HTML", iconName: "language-html5", rate: 3 },
      { name: "CSS", iconName: "language-css3", rate: 3 },
      { name: "Python", iconName: "language-python", rate: 3 },
      { name: "VBA", iconName: "file-excel-box", rate: 3 },
      { name: "Git / Github", iconName: "git", rate: 3 },
      { name: "MongoDb", iconName: "database", rate: 3 },
      { name: "Cmd lines", iconName: "code-greater-than", rate: 2 },
    ],
    languages: [
      { name: "Chinese", iconName: "alpha-c-box", rate: 5 },
      { name: "English", iconName: "alpha-e-box", rate: 4 },
      { name: "Japanese", iconName: "alpha-j-box", rate: 4 },
      { name: "German", iconName: "alpha-g-box", rate: 1 },
    ],
    tools: [
      { name: "Mac", iconName: "apple", rate: 5 },
      { name: "Windows", iconName: "microsoft", rate: 5 },
      { name: "MS Office", iconName: "microsoft-office", rate: 5 },
      { name: "VSCode", iconName: "microsoft-visual-studio-code", rate: 3 },
      { name: "Google Drive", iconName: "google-drive", rate: 3 },
      { name: "Google Cloud", iconName: "cloud", rate: 2 },
      { name: "Adobe Ai", iconName: "adobe", rate: 3 },
      { name: "Adobe Ps", iconName: "adobe", rate: 3 },
      { name: "Fusion 360", iconName: "file-cad", rate: 3 },
      { name: "Raspberry Pi", iconName: "raspberry-pi", rate: 3 },
    ],
  };

  return (
    <Screen mainTitle="Ability">
      <View style={styles.container}>
        <AbilityTable title="Skills" data={data.skills} />
        <View style={styles.margin} />
        <AbilityTable title="Tools" data={data.tools} />
        <View style={styles.margin} />
        <AbilityTable title="Languages" data={data.languages} />
        <View style={styles.margin} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  margin: { height: 10, width: "100%" },
});

export default AbilityScreen;

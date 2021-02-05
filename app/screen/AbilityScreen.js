import { StyleSheet, View } from "react-native";
import React from "react";

import AbilityTable from "../components/AbilityTable";
import Screen from "../components/ScreenForApp";

function AbilityScreen(props) {
  const data = {
    skills: [
      {
        name: "JavaScript",
        iconName: "language-javascript",
        default: true,
        rate: 4,
      },
      { name: "HTML", iconName: "language-html5", default: true, rate: 3 },
      { name: "CSS", iconName: "language-css3", default: true, rate: 3 },
      { name: "node.js", iconName: "nodejs", default: true, rate: 4 },
      { name: "ReactJS", iconName: "react", default: true, rate: 4 },
      { name: "Git / Github", iconName: "git", default: true, rate: 3 },
      { name: "React Native", iconName: "react", default: false, rate: 4 },
      { name: "Python", iconName: "language-python", default: false, rate: 3 },
      { name: "Bootstrap", iconName: "bootstrap", default: false, rate: 3 },
      { name: "MongoDb", iconName: "database", default: false, rate: 3 },
      {
        name: "Cmd lines",
        iconName: "code-greater-than",
        default: false,
        rate: 2,
      },
      { name: "VBA", iconName: "file-excel-box", default: false, rate: 3 },
    ],
    languages: [
      { name: "Chinese", iconName: "alpha-c-box", default: true, rate: 5 },
      { name: "English", iconName: "alpha-e-box", default: true, rate: 4 },
      { name: "Japanese", iconName: "alpha-j-box", default: true, rate: 4 },
      { name: "German", iconName: "alpha-g-box", default: false, rate: 1 },
    ],
    tools: [
      { name: "Mac", iconName: "apple", default: true, rate: 5 },
      { name: "Windows", iconName: "microsoft", default: true, rate: 5 },
      {
        name: "MS Office",
        iconName: "microsoft-office",
        default: true,
        rate: 5,
      },
      {
        name: "VSCode",
        iconName: "microsoft-visual-studio-code",
        default: true,
        rate: 3,
      },
      {
        name: "Google Drive",
        iconName: "google-drive",
        default: true,
        rate: 3,
      },
      { name: "Google Cloud", iconName: "cloud", default: true, rate: 2 },
      { name: "Adobe Ai", iconName: "adobe", default: false, rate: 3 },
      { name: "Adobe Ps", iconName: "adobe", default: false, rate: 3 },
      { name: "Fusion 360", iconName: "file-cad", default: false, rate: 3 },
      {
        name: "Raspberry Pi",
        iconName: "raspberry-pi",
        default: false,
        rate: 3,
      },
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

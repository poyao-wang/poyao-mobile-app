import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import TextH1 from "./TextH1";
import Screen from "./Screen";

function ScreenForApp({ mainTitle, children }) {
  return (
    <Screen style={styles.screen}>
      <TextH1>{mainTitle}</TextH1>
      <ScrollView style={styles.content} bounces="false">
        {children}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { justifyContent: "center", alignItems: "center" },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    width: "100%",
  },
});
export default ScreenForApp;

import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import TextH2 from "./TextH2";
import Screen from "./Screen";

function ScreenForApp({ mainTitle, children }) {
  return (
    <Screen style={styles.screen}>
      <TextH2>{mainTitle}</TextH2>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        bounces="false"
      >
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
  contentContainer: {
    paddingBottom: 20,
  },
});
export default ScreenForApp;

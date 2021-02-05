import React from "react";
import { View, StyleSheet } from "react-native";

import ScreenForApp from "../components/ScreenForApp";
import Text from "../components/Text";
import colors from "../config/colors";
import IconForContact from "../components/IconForContact";

function ContactScreen(props) {
  return (
    <ScreenForApp mainTitle="Contact">
      <View style={styles.container}>
        <Text>Interested in my work?</Text>
        <Text>Feel free to contact me.</Text>
        <View style={styles.iconsView}>
          <IconForContact icnoName="linkedin" textBelow="My LinkedIn" />
          <IconForContact icnoName="github" textBelow="My GitHub" />
          <IconForContact icnoName="email-box" textBelow="My Email" />
          <IconForContact icnoName="web" textBelow="My Website" />
        </View>
      </View>
    </ScreenForApp>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  iconsView: {
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
  },
});

export default ContactScreen;

import React from "react";
import { View, StyleSheet, Linking } from "react-native";

import ScreenForApp from "../components/ScreenForApp";
import Text from "../components/Text";
import IconForContact from "../components/IconForContact";

function ContactScreen({ sourceData }) {
  const data = sourceData.data.contact;
  const linkPress = (url) => {
    if (!url) return;
    Linking.openURL(url);
  };

  return (
    <ScreenForApp mainTitle="Contact">
      <View style={styles.container}>
        <Text>{data.text1}</Text>
        <Text>{data.text2}</Text>
        <View style={styles.iconsView}>
          <IconForContact
            icnoName={data.linkedin.iconName}
            textBelow={data.linkedin.iconText}
            onPress={() => {
              linkPress(data.linkedin.linkContent);
            }}
          />
          <IconForContact
            icnoName={data.github.iconName}
            textBelow={data.github.iconText}
            onPress={() => {
              linkPress(data.github.linkContent);
            }}
          />
          <IconForContact
            icnoName={data.email.iconName}
            textBelow={data.email.iconText}
            onPress={() => {
              linkPress(data.email.linkContent);
            }}
          />
          <IconForContact
            icnoName={data.website.iconName}
            textBelow={data.website.iconText}
            onPress={() => {
              linkPress(data.website.linkContent);
            }}
          />
          <IconForContact
            icnoName={data.ios.iconName}
            textBelow={data.ios.iconText}
            onPress={() => {
              linkPress(data.ios.linkContent);
            }}
          />
          <IconForContact
            icnoName={data.android.iconName}
            textBelow={data.android.iconText}
            onPress={() => {
              linkPress(data.android.linkContent);
            }}
          />
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

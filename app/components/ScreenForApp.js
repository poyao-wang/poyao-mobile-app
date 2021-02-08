import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import TextH2 from "./TextH2";
import Screen from "./Screen";
import colors from "../config/colors";
import navigation from "../navigation/rootNavigation";

const homeOnPress = () => {
  navigation.navigate("Home");
};

const topIcon = (iconName, onPress) => (
  <TouchableOpacity onPress={onPress}>
    <MaterialCommunityIcons //
      name={iconName}
      color={colors.white}
      size={30}
      style={styles.icon}
    />
  </TouchableOpacity>
);

function ScreenForApp({ mainTitle, children, sourceData }) {
  const updateAndNavigateHome = () => {
    sourceData.dataUpdate(true);
    navigation.navigate("Home");
  };

  return (
    <Screen style={styles.screen}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          borderBottomWidth: 1,
          borderBottomColor: colors.light,
          backgroundColor: colors.primary,
        }}
      >
        {topIcon("home", homeOnPress)}
        <TextH2
          style={{
            fontSize: 32,
            textAlign: "center",
            flex: 1,
            color: colors.white,
            margin: 3,
          }}
        >
          {mainTitle}
        </TextH2>
        {topIcon("update", updateAndNavigateHome)}
      </View>
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
  icon: {
    marginHorizontal: 10,
  },
});
export default ScreenForApp;

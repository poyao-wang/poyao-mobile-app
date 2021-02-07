import { View, StyleSheet, Button, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import React from "react";

import colors from "../config/colors";
import IconForLanguage from "../components/IconForLanguage";
import Text from "../components/Text";
import TextH2 from "../components/TextH2";

function HomeScreen({ navigation, sourceData }) {
  const data = sourceData.data.home;
  const screenTitle = sourceData.data.screens.home;

  return (
    <View style={styles.container}>
      <TextH2 style={{ height: 80 }}>{data.title}</TextH2>
      <Text style={{ height: 40, fontSize: 20, margin: 10 }}>
        {data.subTitle}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <IconForLanguage
          textBelow={data.btnTextEng}
          icnoName="alpha-e-box"
          color={colors.medium}
          onPress={() => {
            sourceData.setLanguage("eng");
          }}
        />
        <IconForLanguage
          textBelow={data.btnTextCht}
          icnoName="alpha-c-box"
          color={colors.medium}
          onPress={() => {
            sourceData.setLanguage("cht");
          }}
        />
        <IconForLanguage
          textBelow={data.btnTextJpn}
          icnoName="alpha-j-box"
          color={colors.medium}
          onPress={() => {
            sourceData.setLanguage("jpn");
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          margin: 10,
        }}
        onPress={() => {
          navigation.navigate("App");
        }}
      >
        <Animatable.View
          animation="pulse"
          duration={500}
          iterationDelay={2000}
          iterationCount="infinite"
          style={{
            backgroundColor: colors.primary,
            borderRadius: 10,
            width: 220,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 25, color: colors.white }}>
            {data.buttonTitle}
          </Text>
        </Animatable.View>
      </TouchableOpacity>
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

export default HomeScreen;

import { View, StyleSheet, Button, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import React from "react";

import colors from "../config/colors";
import IconForLanguage from "../components/IconForLanguage";
import Text from "../components/Text";
import TextH2 from "../components/TextH2";

function HomeScreen({ navigation, sourceData }) {
  const data = sourceData.data.home;
  return (
    <View style={styles.container}>
      <TextH2 style={{ height: 80 }}>{data.title}</TextH2>
      <Text style={{ height: 40, fontSize: 20, margin: 10 }}>
        {data.subTitle}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <IconForLanguage
          textBelow="English"
          icnoName="alpha-e-box"
          color={colors.medium}
          onPress={() => {
            sourceData.setLanguage("eng");
          }}
        />
        <IconForLanguage
          textBelow="Chinese"
          icnoName="alpha-c-box"
          color={colors.medium}
          onPress={() => {
            sourceData.setLanguage("cht");
          }}
        />
        <IconForLanguage
          textBelow="Japanese"
          icnoName="alpha-j-box"
          color={colors.medium}
          onPress={() => {
            sourceData.setLanguage("jpn");
          }}
        />
      </View>
      <Animatable.View
        animation="pulse"
        duration={500}
        iterationDelay={2000}
        iterationCount="infinite"
        style={{
          backgroundColor: colors.primary,
          padding: 10,
          paddingHorizontal: 25,
          borderRadius: 10,
          margin: 10,
          width: 220,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("App");
          }}
        >
          <Text style={{ fontSize: 25, color: colors.white }}>
            {data.buttonTitle}
          </Text>
        </TouchableOpacity>
      </Animatable.View>
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

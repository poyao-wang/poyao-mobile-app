import React from "react";
import { View, StyleSheet, Linking } from "react-native";
import * as Animatable from "react-native-animatable";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function TextWithIconForLink({ url, text, style }) {
  const blink = {
    0: {
      scale: 1,
    },
    0.5: {
      scale: 1.05,
    },
    1: {
      scale: 1,
    },
  };

  const linkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <>
      {url && (
        <Animatable.Text
          style={[styles.container, style]}
          animation={blink}
          duration={300}
          iterationDelay={4000}
          iterationCount="infinite"
          onPress={() => {
            linkPress(url);
          }}
        >
          <MaterialCommunityIcons
            name="link"
            color={colors.primary}
            size={15}
          />{" "}
          {text}
        </Animatable.Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignSelf: "flex-start",
    color: colors.primary,
  },
});
export default TextWithIconForLink;

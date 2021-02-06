import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import * as Animatable from "react-native-animatable";
import { StyleSheet } from "react-native";

function ButtonShowHide({
  style,
  down,
  onPress,
  size = 30,
  buttonColor = colors.medium,
}) {
  const fadeInDown = {
    0: {
      opacity: 0,
      translateY: -7,
    },
    0.3: {
      opacity: 1,
      translateY: 0,
    },
    1: {
      opacity: 1,
      translateY: 0,
    },
  };
  const fadeInUp = {
    0: {
      opacity: 0,
      translateY: 7,
    },
    0.3: {
      opacity: 1,
      translateY: 0,
    },
    1: {
      opacity: 1,
      translateY: 0,
    },
  };

  const pulse = {
    0: {
      scale: 1,
    },
    0.5: {
      scale: 1.2,
    },
    1: {
      scale: 1,
    },
  };

  return (
    <Animatable.View
      style={[styles.container, style]}
      // animation={down ? fadeInDown : fadeInUp}
      animation={pulse}
      duration={1500}
      iterationDelay={1500}
      iterationCount="infinite"
    >
      {down && (
        <MaterialCommunityIcons
          name="chevron-double-down"
          color={buttonColor}
          size={size}
          onPress={onPress}
        />
      )}
      {!down && (
        <MaterialCommunityIcons
          name="chevron-double-up"
          color={buttonColor}
          size={size}
          onPress={onPress}
        />
      )}
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "auto",
  },
});

export default ButtonShowHide;

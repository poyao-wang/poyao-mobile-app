import { StyleSheet } from "react-native";
import React from "react";

import { defaultStyles } from "../config/styles";
import Text from "./Text";

function TextH1({ style, children, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style, styles.h1]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    color: defaultStyles.colors.primary,
    paddingVertical: 10,
  },
});
export default TextH1;

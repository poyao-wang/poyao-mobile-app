import { StyleSheet } from "react-native";
import React from "react";

import { defaultStyles } from "../config/styles";
import Text from "./Text";

function TextH2({ style, children, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style, styles.h2]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h2: {
    fontSize: 30,
    color: defaultStyles.colors.primary,
    paddingVertical: 5,
  },
});
export default TextH2;

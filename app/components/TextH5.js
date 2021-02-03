import { StyleSheet } from "react-native";
import React from "react";

import { defaultStyles } from "../config/styles";
import Text from "./Text";

function TextH5({ style, children, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, styles.h5, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h5: {
    fontSize: 26,
    color: defaultStyles.colors.dark,
    paddingVertical: 5,
  },
});
export default TextH5;

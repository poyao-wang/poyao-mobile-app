import { StyleSheet } from "react-native";
import React from "react";

import { defaultStyles } from "../config/styles";
import Text from "./Text";

function TextH4({ style, children, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style, styles.h4]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h4: {
    fontSize: 28,
    color: defaultStyles.colors.dark,
    paddingVertical: 5,
  },
});
export default TextH4;

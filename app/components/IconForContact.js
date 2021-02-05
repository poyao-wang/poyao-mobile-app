import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Text from "../components/Text";
function IconForContact({
  icnoName = "reload",
  textBelow = "XXXXXX",
  color = colors.dark,
  size = 80,
  style,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={[style, styles.container]}>
      <MaterialCommunityIcons name={icnoName} size={size} color={color} />
      <Text style={styles.textBelow}>{textBelow}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
  },
  textBelow: {
    fontSize: 15,
  },
});
export default IconForContact;

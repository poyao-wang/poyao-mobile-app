import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Text from "../components/Text";
function IconForLanguage({
  icnoName = "reload",
  textBelow = "XXXXXX",
  color = colors.dark,
  size = 60,
  style,
  onPress,
}) {
  if (!icnoName) icnoName = "reload";

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons name={icnoName} size={size} color={color} />
      </View>
      <Text style={styles.textBelow}>{textBelow}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    height: 110,
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
  },
  textBelow: {
    fontSize: 15,
  },
});
export default IconForLanguage;

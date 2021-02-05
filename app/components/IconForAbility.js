import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Text from "../components/Text";
function IconForAbility({
  icnoName = "reload",
  textBelow = "XXXXXX",
  color = colors.dark,
  size = 60,
  rate = 5,
  style,
  onPress,
}) {
  if (!icnoName) icnoName = "reload";

  function skillAndRate(rate) {
    const iconSize = 12;
    const amtStarFill = rate;
    const amtStar = 5 - rate;
    return (
      <View style={styles.starContainer}>
        {[...Array(amtStar)].map((e, key) => (
          <MaterialCommunityIcons
            name="star-outline"
            color={colors.black}
            size={iconSize}
            key={key}
          />
        ))}
        {[...Array(amtStarFill)].map((e, key) => (
          <MaterialCommunityIcons
            name="star"
            color={colors.black}
            size={iconSize}
            key={key}
          />
        ))}
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons name={icnoName} size={size} color={color} />
      </View>
      <Text style={styles.textBelow}>{textBelow}</Text>
      {skillAndRate(rate)}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    height: 110,
    // borderWidth: 2,
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    // borderWidth: 2,
  },
  starContainer: {
    flexDirection: "row-reverse",
  },
  textBelow: {
    fontSize: 15,
  },
});
export default IconForAbility;

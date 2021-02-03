import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function AbilityTableRow({ rowData }) {
  function skillAndRate(rate) {
    const iconSize = 15;
    const amtStarFill = rate;
    const amtStar = 5 - rate;
    return (
      <>
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
      </>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{rowData.name}</Text>
      {/* <Text style={styles.rate}>{rowData.rate}</Text> */}
      <View style={styles.rate}>{skillAndRate(rowData.rate)}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  name: { width: "50%" },
  rate: { flexDirection: "row-reverse", width: "50%" },
  container: { flexDirection: "row" },
});
export default AbilityTableRow;

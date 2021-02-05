import { View, StyleSheet } from "react-native";
import React from "react";

import Text from "./Text";
import TextH3 from "./TextH3";
import IconForAbility from "./IconForAbility";
function AbilityTable({ title, data }) {
  return (
    <>
      <TextH3>{title}</TextH3>
      <View style={styles.content}>
        {data.map((rowData, key) => (
          <IconForAbility
            key={key}
            textBelow={rowData.name}
            rate={rowData.rate}
            icnoName={rowData.iconName}
          />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
export default AbilityTable;

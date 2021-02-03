import { View, StyleSheet } from "react-native";
import React from "react";

import AbilityTableRow from "./AbilityTableRow";
import Text from "./Text";
import TextH3 from "./TextH3";
function AbilityTable({ title, data }) {
  return (
    <>
      <TextH3>{title}</TextH3>
      <View style={styles.content}>
        {data.map((rowData, key) => (
          <AbilityTableRow rowData={rowData} key={key} />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    alignSelf: "center",
    justifyContent: "center",
    width: "80%",
  },
});
export default AbilityTable;

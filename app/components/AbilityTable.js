import { View } from "react-native";
import React from "react";

import AbilityTableRow from "./AbilityTableRow";
import Text from "./Text";

function AbilityTable({ title, data }) {
  return (
    <View>
      <Text>{title}</Text>
      {data.map((rowData, key) => (
        <AbilityTableRow rowData={rowData} key={key} />
      ))}
    </View>
  );
}

export default AbilityTable;

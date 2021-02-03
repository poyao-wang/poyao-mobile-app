import React from "react";
import { View } from "react-native";
import ExpTableRow from "./ExpTableRow";
import Text from "./Text";

function ExpTable({ title, data }) {
  return (
    <View>
      <Text>{title}</Text>
      <ExpTableRow rowData={data[1]} />
      {data.map((rowData, key) => (
        <ExpTableRow rowData={rowData} key={key} />
      ))}
    </View>
  );
}

export default ExpTable;

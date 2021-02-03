import React from "react";
import { View } from "react-native";
import ExpTableRow from "./ExpTableRow";
import TextH3 from "./TextH3";

function ExpTable({ title, data }) {
  return (
    <View>
      <TextH3>{title}</TextH3>
      {data.map((rowData, key) => (
        <ExpTableRow rowData={rowData} key={key} />
      ))}
    </View>
  );
}

export default ExpTable;

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ExpTableRow from "./ExpTableRow";
import TextH3 from "./TextH3";
import ButtonShowHide from "./ButtonShowHide";
import colors from "../config/colors";

function ExpTable({ title, data }) {
  const [contShow, setContShow] = useState(true);

  const contShowPress = () => {
    setContShow(!contShow);
  };

  return (
    <View>
      <TextH3>
        {title}{" "}
        <ButtonShowHide
          down={!contShow}
          size={25}
          buttonColor={colors.primary}
          onPress={contShowPress}
        />
      </TextH3>
      {contShow && (
        <View>
          {data.map((rowData, key) => (
            <ExpTableRow rowData={rowData} key={key} />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});

export default ExpTable;

import { View, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";
import TextH3 from "./TextH3";
import IconForAbility from "./IconForAbility";
import colors from "../config/colors";
import ButtonShowHide from "./ButtonShowHide";

function AbilityTable({ title, data }) {
  const dataDefaultShow = data.filter((obj) => obj.default);
  const dataDefaultHide = data.filter((obj) => !obj.default);

  const [contShow, setContShow] = useState(false);
  const contShowPress = () => {
    setContShow(!contShow);
  };

  return (
    <>
      <TextH3>{title}</TextH3>
      <View style={styles.content}>
        {dataDefaultShow.map((rowData, key) => (
          <IconForAbility
            key={key}
            textBelow={rowData.name}
            rate={rowData.rate}
            icnoName={rowData.iconName}
          />
        ))}
        {contShow && (
          <React.Fragment>
            {dataDefaultHide.map((rowData, key) => (
              <IconForAbility
                key={key}
                textBelow={rowData.name}
                rate={rowData.rate}
                icnoName={rowData.iconName}
              />
            ))}
          </React.Fragment>
        )}
      </View>
      <ButtonShowHide
        style={styles.showHideBtn}
        down={!contShow}
        onPress={contShowPress}
      />
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  showHideBtn: {
    marginTop: 10,
  },
});
export default AbilityTable;

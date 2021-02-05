import { View, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";
import TextH3 from "./TextH3";
import IconForAbility from "./IconForAbility";
import colors from "../config/colors";

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
      {!contShow && (
        <MaterialCommunityIcons
          name="chevron-double-down"
          color={colors.medium}
          size={30}
          onPress={contShowPress}
        />
      )}
      {contShow && (
        <MaterialCommunityIcons
          name="chevron-double-up"
          color={colors.medium}
          size={30}
          onPress={contShowPress}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});
export default AbilityTable;

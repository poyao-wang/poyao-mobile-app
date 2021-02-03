import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as Linking from "expo-linking";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";
import TextH4 from "./TextH4";
import TextH5 from "./TextH5";
import colors from "../config/colors";

function ExpTableRow({ rowData }) {
  const [contShow, setContShow] = useState(false);

  const linkPress = (url) => {
    Linking.openURL(url);
  };

  const contShowPress = () => {
    setContShow(!contShow);
  };

  return (
    <View style={styles.container}>
      <TextH5 style={styles.instText}>{rowData.inst}</TextH5>
      <View style={styles.jobDetailView}>
        <TextH5 style={styles.jobTitle} onPress={contShowPress}>
          {rowData.jobTitle}
        </TextH5>
        <View style={styles.jobTitleAndIcon}>
          <Text style={styles.time} onPress={contShowPress}>
            {rowData.time}
          </Text>
          {!contShow && (
            <MaterialCommunityIcons
              name="chevron-double-down"
              color={colors.dark}
              size={20}
              onPress={contShowPress}
            />
          )}
          {contShow && (
            <MaterialCommunityIcons
              name="chevron-double-up"
              color={colors.dark}
              size={20}
              onPress={contShowPress}
            />
          )}
        </View>
        {contShow && (
          <View style={styles.contAndSubInst}>
            <Text onPress={contShowPress}>{rowData.cont}</Text>
            {rowData.hrefText && (
              <View style={styles.subInst}>
                <MaterialCommunityIcons
                  name="link"
                  color={colors.primary}
                  size={20}
                />
                <Text
                  style={styles.subInstWithLink}
                  onPress={() => linkPress(rowData.hrefText)}
                >
                  {rowData.subInst}
                </Text>
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    marginBottom: 20,
  },
  contAndSubInst: {
    paddingTop: 10,
  },
  instText: {
    fontSize: 23,
    fontWeight: "500",
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginRight: 5,
  },
  jobTitleAndIcon: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  jobDetailView: {
    paddingLeft: 10,
  },
  subInst: {
    paddingTop: 10,
    flexDirection: "row",
  },
  subInstAndTime: {
    flexDirection: "row",
  },

  subInstWithLink: {
    color: colors.primary,
    fontSize: 15,
    textDecorationLine: "underline",
    paddingLeft: 5,
  },
  time: {
    fontSize: 15,
    paddingRight: 10,
  },
});
export default ExpTableRow;

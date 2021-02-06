import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Linking from "expo-linking";
import React, { useState } from "react";

import ButtonShowHide from "./ButtonShowHide";
import colors from "../config/colors";
import TextWithIconForLink from "./TextWithIconForLink";
import Text from "./Text";
import TextH4 from "./TextH4";
import TextH5 from "./TextH5";

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
        <Text style={styles.time} onPress={contShowPress}>
          {rowData.time}{" "}
          <ButtonShowHide
            style={{ alignSelf: "center" }}
            down={!contShow}
            onPress={contShowPress}
            size={20}
          />
        </Text>
        {contShow && (
          <View style={styles.contAndLink}>
            <Text onPress={contShowPress}>{rowData.cont}</Text>
            <TextWithIconForLink
              text={rowData.subInst}
              url={rowData.hrefText}
              onPress={() => {
                linkPress(rowData.hrefText);
              }}
            />
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
  contAndLink: {
    paddingTop: 10,
  },
  instText: {
    fontSize: 23,
    fontWeight: "500",
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  timeAndIcon: {
    paddingTop: 10,
    justifyContent: "center",
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

  link: {
    color: colors.primary,
    borderWidth: 2,
    fontSize: 15,
    width: 50,
  },
  time: {
    fontSize: 15,
  },
});
export default ExpTableRow;

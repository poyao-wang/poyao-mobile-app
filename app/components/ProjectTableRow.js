import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Linking from "expo-linking";
import React from "react";
import * as Animatable from "react-native-animatable";

import colors from "../config/colors";
import Text from "./Text";
import TextH3 from "./TextH3";
import TextH4 from "./TextH4";
import TextH5 from "./TextH5";

function ProjectTableRow({ rowData }) {
  const linkPress = (url) => {
    if (url) Linking.openURL(url);
  };
  const blink = {
    0: {
      scale: 1,
    },
    0.5: {
      scale: 1.05,
    },
    1: {
      scale: 1,
    },
  };
  return (
    <View style={styles.card}>
      <Image source={{ uri: rowData.imgSrc }} style={styles.myPicture} />
      <View style={styles.container}>
        <TextH5 style={styles.jobTitle}>{rowData.cardTitleText}</TextH5>
        <Text style={{ marginBottom: 30 }}>{rowData.cardText}</Text>
        <Animatable.View
          animation={blink}
          duration={300}
          iterationDelay={4000}
          iterationCount="infinite"
          style={styles.githubLinkBtn}
        >
          <TouchableOpacity
            onPress={() => {
              linkPress(rowData.btnLink);
            }}
          >
            <Text style={styles.githubLinkBtnText}>
              <MaterialCommunityIcons name="github" size={24} />
              {" GitHub Link"}
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.light,
    marginBottom: 30,
    overflow: "hidden",
  },
  jobTitle: { fontSize: 25, fontWeight: "500", marginRight: 5 },
  myPicture: {
    resizeMode: "cover",
    flex: 1,
    aspectRatio: 4 / 3, // Your aspect ratio
  },
  container: {
    padding: 10,
    paddingBottom: 20,
  },
  githubLinkBtn: {
    borderWidth: 0,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    padding: 5,
    paddingTop: 8,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  githubLinkBtnText: {
    alignSelf: "center",
    fontSize: 23,
    color: colors.white,
    fontWeight: "500",
  },
});
export default ProjectTableRow;

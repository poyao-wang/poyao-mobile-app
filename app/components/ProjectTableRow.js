import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import Text from "./Text";
import TextH3 from "./TextH3";
import * as Linking from "expo-linking";
import colors from "../config/colors";
import TextH4 from "./TextH4";
import TextH5 from "./TextH5";

function ProjectTableRow({ rowData }) {
  const linkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: rowData.imgSrc }} style={styles.myPicture} />
      <View style={styles.container}>
        <TextH5 style={styles.jobTitle}>{rowData.cardTitleText}</TextH5>
        <Text>{rowData.cardText}</Text>
        <Button
          title={rowData.btnText}
          onPress={() => {
            linkPress(rowData.btnLink);
          }}
        />
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
  },
});
export default ProjectTableRow;

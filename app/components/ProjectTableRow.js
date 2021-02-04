import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import Text from "./Text";
import TextH3 from "./TextH3";
import * as Linking from "expo-linking";
import colors from "../config/colors";
import TextH4 from "./TextH4";

function ProjectTableRow({ rowData }) {
  const linkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: rowData.imgSrc }} style={styles.myPicture} />
      <View style={styles.container}>
        <TextH4>{rowData.cardTitleText}</TextH4>
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
  myPicture: {
    height: 250,
    width: "100%",
  },
  container: {
    padding: 10,
  },
});
export default ProjectTableRow;

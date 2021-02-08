import React from "react";
import Text from "../components/Text";
import ScreenForApp from "../components/ScreenForApp";
import { View, StyleSheet, Image } from "react-native";
import TextH3 from "../components/TextH3";
import TextH5 from "../components/TextH5";
import TextH4 from "../components/TextH4";

function ProfileScreen({ sourceData }) {
  const data = sourceData.data.profile;
  const screenTitle = sourceData.data.screens.profile;

  return (
    <ScreenForApp mainTitle={screenTitle}>
      <View style={styles.content}>
        <TextH5 style={styles.oneLineMsg}>{data.oneLineMsg}</TextH5>
        <Text style={styles.aboutMe}>{data.aboutMe}</Text>
        <Image
          source={require("../assets/me2.jpeg")}
          style={styles.myPicture}
        />
        <TextH4>{data.name}</TextH4>
        {data.details.map((rowData, key) => (
          <React.Fragment key={key}>
            <Text style={styles.detailTitle}>{rowData.title}</Text>
            <Text>{rowData.content}</Text>
          </React.Fragment>
        ))}
      </View>
    </ScreenForApp>
  );
}

const styles = StyleSheet.create({
  aboutMe: {
    textAlign: "center",
  },
  content: {
    alignItems: "center",
  },
  detailTitle: {
    fontWeight: "bold",
    marginTop: 5,
  },
  myPicture: {
    borderRadius: 100,
    height: 200,
    marginVertical: 25,
    width: 200,
  },
  oneLineMsg: {
    marginBottom: 7,
    fontSize: 25,
    textAlign: "center",
    marginTop: 7,
  },
});

export default ProfileScreen;

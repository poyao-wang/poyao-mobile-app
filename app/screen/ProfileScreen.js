import React from "react";
import Text from "../components/Text";
import ScreenForApp from "../components/ScreenForApp";
import { View, StyleSheet, Image } from "react-native";
import TextH3 from "../components/TextH3";
import TextH5 from "../components/TextH5";
import TextH4 from "../components/TextH4";

function ProfileScreen(props) {
  const data = {
    oneLineMsg: "A Self-Taught Programmer",
    aboutMe:
      "I am a mechanical engineer. Working in automobile industry. I started stydying programming since 2019.",
    details: [
      { title: "Age :", content: "33 years" },
      { title: "Location :", content: "Tokyo, Japan" },
    ],
  };
  const thisYear = new Date();
  const myAge = thisYear.getFullYear() - 1988;

  return (
    <ScreenForApp mainTitle="Profile">
      <View style={styles.content}>
        <TextH5 style={styles.oneLineMsg}>{data.oneLineMsg}</TextH5>
        <Text>{data.aboutMe}</Text>
        <Image
          source={require("../assets/me2.jpeg")}
          style={styles.myPicture}
        />
        <TextH4>Poyao Wang</TextH4>
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
  },
});

export default ProfileScreen;

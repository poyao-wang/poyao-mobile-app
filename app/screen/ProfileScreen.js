import React from "react";
import Text from "../components/Text";
import ScreenForApp from "../components/ScreenForApp";
import { View, StyleSheet, Image } from "react-native";
import TextH2 from "../components/TextH2";

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
        <Text style={styles.oneLineMsg}>{data.oneLineMsg}</Text>
        <Text>{data.aboutMe}</Text>
        <Image
          source={require("../assets/me2.jpeg")}
          style={styles.myPicture}
        />
        <TextH2>Details</TextH2>
        <Text style={styles.myName}>Poyao Wang</Text>
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
  myName: {
    fontSize: 25,
  },
  oneLineMsg: {
    fontSize: 20,
    marginBottom: 7,
    fontWeight: "500",
  },
});

export default ProfileScreen;

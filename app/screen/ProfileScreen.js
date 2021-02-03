import React from "react";
import Text from "../components/Text";
import ScreenForApp from "../components/ScreenForApp";
import { View, StyleSheet, Image } from "react-native";
import TextH2 from "../components/TextH2";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ProfileScreen(props) {
  const thisYear = new Date();
  const myAge = thisYear.getFullYear() - 1988;

  return (
    <ScreenForApp mainTitle="Profile">
      <View style={styles.content}>
        <TextH2>About me</TextH2>
        <Text style={styles.oneLineMsg}>A Self-Taught Programmer.</Text>
        <Text>
          I am a mechanical engineer. Working in automobile industry. I started
          stydying programming since 2019.
        </Text>

        <Image
          source={require("../assets/me2.jpeg")}
          style={styles.myPicture}
        />

        <TextH2>Details</TextH2>
        <Text style={styles.myName}>Poyao Wang</Text>
        <Text style={styles.detailTitle}>Age:</Text>
        <Text>{myAge + " years"}</Text>
        <Text style={styles.detailTitle}>Location:</Text>
        <Text>Tokyo, Japan</Text>
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
  },
});

export default ProfileScreen;

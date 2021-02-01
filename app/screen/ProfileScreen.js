import React from "react";
import { View, StyleSheet, Text } from "react-native";

function ProfileScreen(props) {
  const thisYear = new Date();
  const myAge = thisYear.getFullYear() - 1988;

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Text>A Self-Taught Programmer.</Text>
      <Text>About me</Text>
      <Text>
        I am a mechanical engineer. Working in automobile industry. I started
        stydying programming since 2019.
      </Text>
      <Text>Details</Text>
      <Text>Name:</Text>
      <Text>Poyao Wang</Text>
      <Text>Nickname:</Text>
      <Text>Boyo</Text>
      <Text>Age:</Text>
      <Text>{myAge + " years"}</Text>
      <Text>Location:</Text>
      <Text>Tokyo, Japan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;

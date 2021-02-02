import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../components/Text";
import TextH1 from "../components/TextH1";

function ContactScreen(props) {
  return (
    <View style={styles.container}>
      <TextH1>Contact</TextH1>
      <Text>Interested in my work? Feel free to contact me.</Text>
      <Text>My Linkedin Page</Text>
      <Text>Send Me An Email</Text>
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

export default ContactScreen;

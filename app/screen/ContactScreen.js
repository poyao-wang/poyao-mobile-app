import React from "react";
import { View, StyleSheet, Text } from "react-native";

function ContactScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Contact Screen</Text>
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

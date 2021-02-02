import React from "react";
import { View, StyleSheet, Button } from "react-native";
import Text from "../components/Text";
import TextH1 from "../components/TextH1";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TextH1>Poyao Wang</TextH1>
      <Text>This is the mobile app of Poyao.</Text>
      <Button
        title="ENTER"
        onPress={() => {
          navigation.navigate("App");
        }}
      />
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

export default HomeScreen;

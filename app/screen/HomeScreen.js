import React from "react";
import { View, StyleSheet, Button } from "react-native";
import Text from "../components/Text";
import TextH2 from "../components/TextH2";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TextH2>Poyao Wang</TextH2>
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

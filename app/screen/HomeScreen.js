import React from "react";
import { View, StyleSheet, Button, TouchableOpacity } from "react-native";
import Text from "../components/Text";
import TextH2 from "../components/TextH2";
import * as Animatable from "react-native-animatable";
import colors from "../config/colors";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TextH2>Poyao Wang</TextH2>
      <Text style={{ fontSize: 20, margin: 10 }}>
        This is the mobile app of Poyao.
      </Text>
      <Animatable.View
        animation="pulse"
        duration={500}
        iterationDelay={2000}
        iterationCount="infinite"
        style={{
          backgroundColor: colors.primary,
          padding: 10,
          paddingHorizontal: 25,
          borderRadius: 10,
          margin: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("App");
          }}
        >
          <Text style={{ fontSize: 25, color: colors.white }}>
            {"E N T E R"}
          </Text>
        </TouchableOpacity>
      </Animatable.View>
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

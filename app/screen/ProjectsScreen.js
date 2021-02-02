import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ProjectTable from "../components/ProjectTable";

function ProjectsScreen(props) {
  const data = {
    cards: [
      {
        imgSrc: "assets/Project1.jpg",
        cardTitleText: "This web app / ReactJS",
        cardText:
          "This webpage is built by reactJS, combined with " +
          "Bootstrap, and deployed on Google Cloud.",
        btnLink: "https://github.com/BoyoWang/my-web-app",
        btnText: "Github link",
      },
      {
        imgSrc: "assets/Project2.jpg",
        cardTitleText: "Raspberry Pi / Python",
        cardText:
          "A motor controller, built on Raspberry Pi, " +
          "coding in Python, using Tkinter as GUI.",
        btnLink: "https://github.com/BoyoWang/control-box",
        btnText: "Github link",
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text>Projects Screen</Text>
      <ProjectTable data={data.cards} />
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

export default ProjectsScreen;

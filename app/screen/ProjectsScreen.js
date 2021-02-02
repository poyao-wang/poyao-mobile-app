import React from "react";
import { View, StyleSheet } from "react-native";
import ProjectTable from "../components/ProjectTable";
import Text from "../components/Text";
import TextH1 from "../components/TextH1";

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
      <TextH1>Projects</TextH1>
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

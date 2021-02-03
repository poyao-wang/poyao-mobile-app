import React from "react";

import ProjectTable from "../components/ProjectTable";
import Screen from "../components/ScreenForApp";

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
    <Screen mainTitle="Projects">
      <ProjectTable data={data.cards} />
    </Screen>
  );
}

export default ProjectsScreen;

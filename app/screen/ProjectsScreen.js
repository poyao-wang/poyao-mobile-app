import React from "react";

import ProjectTable from "../components/ProjectTable";
import Screen from "../components/ScreenForApp";

function ProjectsScreen({ sourceData }) {
  const data = sourceData.data.projects;
  const screenTitle = sourceData.data.screens.projects;

  return (
    <Screen mainTitle={screenTitle} sourceData={sourceData}>
      <ProjectTable data={data.cards} />
    </Screen>
  );
}

export default ProjectsScreen;

import React from "react";

import ProjectTable from "../components/ProjectTable";
import Screen from "../components/ScreenForApp";

function ProjectsScreen({ sourceData }) {
  const data = sourceData.data.projects;
  return (
    <Screen mainTitle="Projects">
      <ProjectTable data={data.cards} />
    </Screen>
  );
}

export default ProjectsScreen;

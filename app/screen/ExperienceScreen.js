import React from "react";

import ExpTable from "../components/ExpTable";
import ScreenForApp from "../components/ScreenForApp";

function ExperienceScreen({ sourceData }) {
  const data = sourceData.data.experience;
  return (
    <ScreenForApp mainTitle="Experience">
      <ExpTable title={data.careers.title} data={data.careers.data} />
      <ExpTable title={data.educations.title} data={data.educations.data} />
    </ScreenForApp>
  );
}

export default ExperienceScreen;

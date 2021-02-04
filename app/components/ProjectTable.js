import { View } from "react-native";
import React from "react";

import ProjectTableRow from "./ProjectTableRow";
import Text from "./Text";

function ProjectTable({ title, data }) {
  return (
    <View>
      <Text>{title}</Text>
      {data.map((rowData, key) => (
        <ProjectTableRow rowData={rowData} key={key} />
      ))}
    </View>
  );
}

export default ProjectTable;

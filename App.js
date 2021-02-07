import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";

import data from "./app/config/sourceData";
import MainNavigator from "./app/navigation/MainNavigator";

export default function App() {
  const [sourceData, setSourceData] = useState(data.eng);

  const setLanguage = (languageCode) => {
    setSourceData(data[languageCode]);
  };

  return (
    <NavigationContainer>
      <MainNavigator
        sourceData={{ data: sourceData, setLanguage: setLanguage }}
      />
    </NavigationContainer>
  );
}

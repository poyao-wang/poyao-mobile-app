import { Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import { navigationRef } from "./app/navigation/rootNavigation";
import data from "./app/config/sourceData";
import MainNavigator from "./app/navigation/MainNavigator";

export default function App() {
  const [originalData, setOriginalData] = useState(data.data);
  const [language, setLanguage] = useState(data.data.defaultLanguage);
  const [sourceData, setSourceData] = useState(originalData[language]);

  const setLanguageAndData = (languageCode) => {
    setLanguage(languageCode);
    setSourceData(originalData[languageCode]);
  };

  const update = async (successAlertShow) => {
    const newData = await data.update(successAlertShow);
    setOriginalData(newData);
    setLanguageAndData(language);
  };

  useEffect(() => {
    update();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator
        sourceData={{
          data: sourceData,
          dataUpdate: update,
          setLanguage: setLanguageAndData,
          language,
        }}
      />
    </NavigationContainer>
  );
}

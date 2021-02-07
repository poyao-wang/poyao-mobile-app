import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import AppNavigator from "./AppNavigator";
import HomeScreen from "../screen/HomeScreen";

const Stack = createStackNavigator();

function MainNavigator({ sourceData }) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen name="Home" options={{ headerShown: false }}>
        {(props) => <HomeScreen {...props} sourceData={sourceData} />}
      </Stack.Screen>
      <Stack.Screen name="App" options={{ headerShown: false }}>
        {(props) => <AppNavigator {...props} sourceData={sourceData} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default MainNavigator;

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import AbilityScreen from "../screen/AbilityScreen";
import ContactScreen from "../screen/ContactScreen";
import ExperienceScreen from "../screen/ExperienceScreen";
import HomeScreen from "../screen/HomeScreen";
import ProfileScreen from "../screen/ProfileScreen";
import ProjectsScreen from "../screen/ProjectsScreen";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Experience" component={ExperienceScreen} />
      <Tab.Screen name="Ability" component={AbilityScreen} />
      <Tab.Screen name="Projects" component={ProjectsScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}

export default AppNavigator;

import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import AbilityScreen from "../screen/AbilityScreen";
import ContactScreen from "../screen/ContactScreen";
import ExperienceScreen from "../screen/ExperienceScreen";
import HomeScreen from "../screen/HomeScreen";
import ProfileScreen from "../screen/ProfileScreen";
import ProjectsScreen from "../screen/ProjectsScreen";

const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Experience" component={ExperienceScreen} />
      <Drawer.Screen name="Ability" component={AbilityScreen} />
      <Drawer.Screen name="Projects" component={ProjectsScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
    </Drawer.Navigator>
  );
}

export default AppNavigator;

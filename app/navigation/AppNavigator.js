import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AbilityScreen from "../screen/AbilityScreen";
import ContactScreen from "../screen/ContactScreen";
import ExperienceScreen from "../screen/ExperienceScreen";
import ProfileScreen from "../screen/ProfileScreen";
import ProjectsScreen from "../screen/ProjectsScreen";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const tabScreen = (name, lableName, iconName, component) => (
  <Tab.Screen
    name={name}
    options={{
      tabBarLabel: lableName,
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons //
          name={iconName}
          color={color}
          size={size}
        />
      ),
    }}
  >
    {component}
  </Tab.Screen>
);

function AppNavigator({ sourceData }) {
  const data = sourceData.data.screens;
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
      }}
    >
      {tabScreen("Profile", data.profile, "account", (props) => (
        <ProfileScreen {...props} sourceData={sourceData} />
      ))}
      {tabScreen("Experience", data.experience, "bulletin-board", (props) => (
        <ExperienceScreen {...props} sourceData={sourceData} />
      ))}
      {tabScreen("Ability", data.ability, "school", (props) => (
        <AbilityScreen {...props} sourceData={sourceData} />
      ))}
      {tabScreen("Projects", data.projects, "folder-multiple", (props) => (
        <ProjectsScreen {...props} sourceData={sourceData} />
      ))}
      {tabScreen("Contact", data.contact, "phone", (props) => (
        <ContactScreen {...props} sourceData={sourceData} />
      ))}
    </Tab.Navigator>
  );
}

export default AppNavigator;

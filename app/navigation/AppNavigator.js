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

const tabScreen = (name, iconName, component) => (
  <Tab.Screen
    name={name}
    options={{
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
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: { height: 90 },
      }}
    >
      {tabScreen("Profile", "account", (props) => (
        <ProfileScreen {...props} sourceData={sourceData} />
      ))}
      {tabScreen("Experience", "bulletin-board", (props) => (
        <ExperienceScreen {...props} sourceData={sourceData} />
      ))}
      {tabScreen("Ability", "school", (props) => (
        <AbilityScreen {...props} sourceData={sourceData} />
      ))}
      {tabScreen("Projects", "folder-multiple", (props) => (
        <ProjectsScreen {...props} sourceData={sourceData} />
      ))}
      <Tab.Screen
        name="Contact"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons //
              name="phone"
              color={color}
              size={size}
            />
          ),
        }}
        component={ContactScreen}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;

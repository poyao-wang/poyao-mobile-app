import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AbilityScreen from "../screen/AbilityScreen";
import ContactScreen from "../screen/ContactScreen";
import ExperienceScreen from "../screen/ExperienceScreen";
import ProfileScreen from "../screen/ProfileScreen";
import ProjectsScreen from "../screen/ProjectsScreen";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons //
              name="account"
              color={color}
              size={size}
            />
          ),
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="Experience"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons //
              name="bulletin-board"
              color={color}
              size={size}
            />
          ),
        }}
        component={ExperienceScreen}
      />
      <Tab.Screen
        name="Ability"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons //
              name="school"
              color={color}
              size={size}
            />
          ),
        }}
        component={AbilityScreen}
      />
      <Tab.Screen
        name="Projects"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons //
              name="folder-multiple"
              color={color}
              size={size}
            />
          ),
        }}
        component={ProjectsScreen}
      />
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

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CameraScreen } from "../screens/CameraScreen";
import { FeedScreen } from "../screens/FeedScreen";
import { DataScreen } from "../screens/DataScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { colors } from "../theme/colors";

const Tab = createBottomTabNavigator();

export function RootTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarActiveTintColor: colors.accentOrange,
        tabBarInactiveTintColor: colors.textMuted,
      }}
    >
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{ tabBarLabel: "识别", tabBarIcon: () => null }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{ tabBarLabel: "动态", tabBarIcon: () => null }}
      />
      <Tab.Screen
        name="Data"
        component={DataScreen}
        options={{ tabBarLabel: "数据", tabBarIcon: () => null }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: "我的", tabBarIcon: () => null }}
      />
    </Tab.Navigator>
  );
}
